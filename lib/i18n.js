import id from '../content/i18n/id'
import en from '../content/i18n/en'

export const locales = ['id', 'en']
export const defaultLocale = 'id'

const dictionaries = { id, en }

export function isValidLocale(locale) {
  return locales.includes(locale)
}

export function getDictionary(locale) {
  return dictionaries[isValidLocale(locale) ? locale : defaultLocale]
}
