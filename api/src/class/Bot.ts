import { DiscordPermissions } from "./Permissions";
import { validate, Length, IsInt, IsFQDN, ValidateNested, ValidationError, IsUrl } from 'class-validator';
import { r, dbCon } from '../rethinkdb';

interface BotObject {
  id: string;
  count: number;
  website: string;
  permissions: number;
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

  constructor({
    id,
    count,
    website,
    permissions,
  }: BotObject) {
    this.id = id;
    this.count = count;
    this.website = website;
    this.permissions = DiscordPermissions.fromInteger(permissions);
  }

  toObject(): BotObject {
    return {
      id: this.id,
      count: this.count,
      website: this.website,
      permissions: this.permissions.toInteger(),
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
        .insert(this.toObject())
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

export {
  Bot
}
