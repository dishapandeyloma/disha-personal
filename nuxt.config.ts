// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  future: { compatibilityVersion: 4 },
  srcDir: "app",
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      emailjsServiceId: "service_mc4a317",
      emailjsTemplateId: "template_5ugl1jn",
      emailjsPublicKey: "br7Nn_0J3sMhA_cmc",
    },
  },
  css: ["~/assets/css/main.css"],
  modules: [
    "@nuxt/icon",
    "@nuxtjs/color-mode",
    "@nuxtjs/i18n",
    "@nuxt/ui",
    "@nuxtjs/sitemap",
    "@nuxtjs/robots",
  ],
  site: {
    url: "https://dishapandey.com", // Replace with your actual domain
    name: "Disha Pandey | Full Stack Developer",
    description:
      "Portfolio of Disha Pandey, a Full Stack Developer specializing in Vue, Next.js, and Node.js.",
    defaultLocale: "en-US",
  },
  sitemap: {
    enabled: true,
  },
  robots: {
    enabled: true,
    disallow: ["/admin", "/private"],
  },
  colorMode: {
    preference: "dark",
    fallback: "dark"
  },
  devServer: {
    port: 3000,
    host: "0.0.0.0",
  },
  i18n: {
    locales: [
      { code: "en-US", name: "English", file: "en-US.json" },
      { code: "zh-CN", name: "Chinese", file: "zh-CN.json" },
      { code: "de-DE", name: "German", file: "de-DE.json" },
      { code: "km-KH", name: "Khmer", file: "km-KH.json" },
      { code: "th-TH", name: "Thai", file: "th-TH.json" },
      { code: "vi-VN", name: "Vietnamese", file: "vi-VN.json" },
      { code: "ja-JP", name: "Japanese", file: "ja-JP.json" },
    ],
    defaultLocale: "en-US",
    strategy: "no_prefix",
    langDir: "locales",
    baseUrl: "https://dishapandey.com",
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
