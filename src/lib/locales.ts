export const locales = ["ka", "en", "ru"] as const;
export type Locale = (typeof locales)[number];

export const localePaths: Record<Locale, string> = {
  ka: "/",
  en: "/en/",
  ru: "/ru/",
};

export function canonicalFor(locale: Locale): string {
  return new URL(localePaths[locale], "https://storum.ge").toString();
}
