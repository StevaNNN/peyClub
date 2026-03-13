export type Locale = "en" | "sr";

export const LOCALES: Locale[] = ["en", "sr"];
export const DEFAULT_LOCALE: Locale = "en";

export const resolveLocale = (locale?: string): Locale => {
  return LOCALES.includes(locale as Locale)
    ? (locale as Locale)
    : DEFAULT_LOCALE;
};
