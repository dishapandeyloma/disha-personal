export default defineRobotsConfig({
  groups: [
    {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin', '/private'],
    },
  ],
  sitemap: 'https://dishapandey.com/sitemap.xml',
})
