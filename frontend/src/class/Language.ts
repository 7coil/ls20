import flat from 'flat';
import englishTranslations from '../translations/en-GB.yml';

interface TranslationObject {
  [key: string]: string | TranslationObject
}

interface LanguageObject {
  code: string,
  translations: TranslationObject
}

class Language {
  static languages: Language[] = []
  code: string
  translations: TranslationObject

  constructor({
    code,
    translations,
  }: LanguageObject) {
    this.code = code;
    this.translations = translations;
  }

  static addLanguage(data: LanguageObject): void {
    this.languages.push(new Language(data));
  }

  static getCodes(): string[] {
    return this.languages.map(lang => lang.code)
  }

  static getTranslationObject(): TranslationObject {
    const obj: TranslationObject = {};

    this.languages.forEach((language) => {
      obj[language.code] = flat(language.translations)
    })

    return obj
  }
}

Language.addLanguage({
  code: 'en-GB',
  translations: englishTranslations
})

export {
  Language
}
