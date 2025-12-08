<template>
  <RouterView />
</template>

<script setup>
import { onMounted } from 'vue'
import i18n from './i18n'

onMounted(async () => {
  const trRes = await fetch('/locales/tr.json')
  const enRes = await fetch('/locales/en.json')

  const trMessages = await trRes.json()
  const enMessages = await enRes.json()

  i18n.global.setLocaleMessage('tr', trMessages)
  i18n.global.setLocaleMessage('en', enMessages)
})
</script>
