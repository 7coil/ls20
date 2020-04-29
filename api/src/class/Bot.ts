import { ArrayMinSize, IsEnum, IsInt, IsUrl, Length, MaxLength, validate, ValidateNested, ValidationError } from 'class-validator';
import { Language } from "../enum/Language";
import { dbCon, r } from '../rethinkdb';
import { DiscordPermissions } from "./Permissions";

interface BotTranslationObject {
  name: string;
  description: string;
  body: string;
  language: Language
}

interface BotObject {
  id: string;
  count: number;
  website: string;
  permissions: number;
  translations: BotTranslationObject[];
}

class BotTranslation {
  @MaxLength(48)
  name: string;

  @MaxLength(128)
  description: string;

  @MaxLength(4086)
  body: string;

  @IsEnum(Language)
  language: Language;

  constructor({
    name,
    description,
    body,
    language,
  }: BotTranslationObject) {
    this.name = name;
    this.description = description;
    this.body = body;
    this.language = language;
  }

  validate(): Promise<ValidationError[]> {
    return validate(this)
  }
  
  toObject(): BotTranslationObject {
    return {
      name: this.name,
      description: this.description,
      body: this.body,
      language: this.language,
    }
  }
}

class Bot {
  @Length(10, 20)
  id: string;
  @IsInt()
  count: number;
  @IsUrl({
    protocols: ['http', 'https']
  })
  website: string;

  @ValidateNested()
  permissions: DiscordPermissions;
  
  @ArrayMinSize(1)
  @ValidateNested()
  translations: BotTranslation[];

  constructor({
    id,
    count,
    website,
    permissions,
    translations,
  }: BotObject) {
    this.id = id;
    this.count = count;
    this.website = website;
    this.permissions = DiscordPermissions.fromInteger(permissions);

    if (Array.isArray(translations)) {
      this.translations = translations.map(translation => new BotTranslation(translation));
    } else {
      throw new Error('An array of BotTranslationObject was not passed into the Bot constructor.')
    }
  }

  toObject(): BotObject {
    return {
      id: this.id,
      count: this.count,
      website: this.website,
      permissions: this.permissions.toInteger(),
      translations: this.translations.map(translation => translation.toObject()),
    }
  }

  static fetchAll(): Promise<Bot[]> {
    return new Promise((resolve, reject) => {
      r.table('bots')
        .run(dbCon)
        .then(cursor => cursor.toArray())
        .then((results: BotObject[]) => {
          resolve(results.map(result => new Bot(result)))
        })
        .catch(reject)
    })
  }

  write(): Promise<void> {
    return new Promise((resolve, reject) => {
      r.table('bots')
        .insert(this.toObject(), {
          conflict: 'replace'
        })
        .run(dbCon)
        .then(() => {
          resolve();
        })
        .catch(reject)
    })
  }

  validate(): Promise<ValidationError[]> {
    return validate(this)
  }
}

export { Bot };

