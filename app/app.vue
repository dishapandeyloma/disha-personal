<template>
  <UApp>
    <div class="app-wrapper">
      <div class="noise-overlay"></div>
      <div class="bg-glow glow-1"></div>
      <div class="bg-glow glow-2"></div>
      
      <UMain>
        <NuxtLayout>
          <NuxtPage />
        </NuxtLayout>
      </UMain>

      <CustomCursor />
    </div>
  </UApp>
</template>

<script setup>
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true
})

useSeoMeta({
  title: 'Disha Pandey | Full Stack Developer',
  ogTitle: 'Disha Pandey | Full Stack Developer',
  description: 'Portfolio of Disha Pandey, a Full Stack Developer specializing in Vue, Next.js, and Node.js with 5 years of experience.',
  ogDescription: 'Portfolio of Disha Pandey, a Full Stack Developer specializing in Vue, Next.js, and Node.js with 5 years of experience.',
  ogImage: '/og-image.png',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Disha Pandey | Full Stack Developer',
  twitterDescription: 'Portfolio of Disha Pandey, a Full Stack Developer specializing in Vue, Next.js, and Node.js.',
  twitterImage: '/og-image.png',
})

useHead({
  htmlAttrs: {
    lang: head.value.htmlAttrs.lang,
    dir: head.value.htmlAttrs.dir
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png'
    },
    ...(head.value.link || [])
  ],
  meta: [
    ...(head.value.meta || [])
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Disha Pandey',
        url: 'https://dishapandey.com',
        jobTitle: 'Full Stack Developer',
        description: 'Portfolio of Disha Pandey, a Full Stack Developer specializing in Vue, Next.js, and Node.js.',
        sameAs: [
          'https://github.com/dishapandey',
          'https://linkedin.com/in/disha-pandey'
        ]
      })
    }
  ]
})
</script>

<style>
.app-wrapper {
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
}
</style>
