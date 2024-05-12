export const i18n = {
  defaultLocale: "uk",
  locales: ["en", "de", "fr", "pl", "uk"],
} as const;

export type Locale = (typeof i18n)["locales"][number];
