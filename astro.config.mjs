import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://storum.ge",
  output: "static",
  trailingSlash: "always",
  compressHTML: true,
  i18n: {
    defaultLocale: "ka",
    locales: ["ka", "en", "ru"],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
});
