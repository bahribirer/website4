import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import 'primeicons/primeicons.css'
import { createPinia } from 'pinia'
import router from './router'
import 'primeflex/primeflex.css'

// 🔹 i18n import
import i18n from './i18n'
import { createHead } from '@unhead/vue/client'

const head = createHead()

createApp(App)
  .use(head)
  .use(PrimeVue)
  .use(createPinia())
  .use(router)
  .use(i18n)
  .mount('#app')
