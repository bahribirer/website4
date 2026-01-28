<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { useI18n } from 'vue-i18n'
import { computed, watch } from 'vue'
import { useRoute } from 'vue-router'

const { t, locale } = useI18n()
const route = useRoute()

const siteName = 'Pera Legal & Partners'
const baseUrl = 'https://peralegal.com.tr'

const seoData = computed(() => {
  const path = route.path === '/' ? 'home' : route.path.split('/')[1]
  
  // Default values
  let title = t('navbar.home') + ' | ' + siteName
  let description = t('hero.toolsSubtitle')
  
  // Page specific logic (can be expanded)
  if (route.path.includes('hakkimizda')) {
    title = t('navbar.about') + ' | ' + siteName
    description = t('aboutpage.desc1').substring(0, 160)
  } else if (route.path.includes('ekibimiz')) {
    title = t('navbar.team') + ' | ' + siteName
  } else if (route.path.includes('calisma-alanlarimiz')) {
    title = t('navbar.areas') + ' | ' + siteName
  } else if (route.path.includes('iletisim')) {
    title = t('navbar.contact') + ' | ' + siteName
  } else if (route.path.includes('hesaplama-araclari')) {
    title = t('navbar.tools') + ' | ' + siteName
  }

  return { title, description }
})

const updateHead = () => {
  useHead({
    title: seoData.value.title,
    meta: [
      { name: 'description', content: seoData.value.description },
      { property: 'og:title', content: seoData.value.title },
      { property: 'og:description', content: seoData.value.description },
      { property: 'og:url', content: baseUrl + route.path },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://peralegal.com.tr/assets/pera.png' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: seoData.value.title },
      { name: 'twitter:description', content: seoData.value.description },
      { name: 'twitter:image', content: 'https://peralegal.com.tr/assets/pera.png' }
    ],
    link: [
      { rel: 'canonical', href: baseUrl + route.path },
      { rel: 'alternate', hreflang: 'tr', href: baseUrl + (route.path === '/' ? '' : route.path) },
      { rel: 'alternate', hreflang: 'x-default', href: baseUrl + (route.path === '/' ? '' : route.path) }
    ]
  })
}

// Initial call
updateHead()

// Watch for route or locale changes
watch([() => route.path, () => locale.value], () => {
  updateHead()
})
</script>

<template>
  <!-- No visible content -->
</template>
