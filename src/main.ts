import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import 'primeicons/primeicons.css'
import { createPinia } from 'pinia'
import router from './router'
import 'primeflex/primeflex.css'


createApp(App)
  .use(PrimeVue)
  .use(createPinia())
  .use(router)
  .mount('#app')
