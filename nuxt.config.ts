// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  future: { compatibilityVersion: 4 },
  srcDir: "app",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: ["@nuxt/icon", "@nuxtjs/color-mode", "@nuxtjs/i18n"],
  colorMode: {
    preference: "dark",
    fallback: "dark",
    classSuffix: "-mode",
  },
  i18n: {
    locales: [
      { code: "en", name: "English", file: "en.json" },
      { code: "zh", name: "Chinese", file: "zh.json" },
      { code: "de", name: "German", file: "de.json" },
      { code: "km", name: "Khmer", file: "km.json" },
      { code: "th", name: "Thai", file: "th.json" },
      { code: "vi", name: "Vietnamese", file: "vi.json" },
      { code: "ja", name: "Japanese", file: "ja.json" },
    ],
    defaultLocale: "en",
    strategy: "no_prefix",
    langDir: "locales/",
  },
  app: {
    head: {
      title: "Disha Pandey | Full Stack Developer",
      meta: [
        {
          name: "description",
          content:
            "Portfolio of Disha Pandey, a Full Stack Developer with 5 years of experience specializing in Vue, Next.js, and Node.js.",
        },
      ],
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap",
        },
      ],
    },
  },
});
