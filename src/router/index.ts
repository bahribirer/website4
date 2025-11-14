import { createRouter, createWebHashHistory } from 'vue-router'

// 🔹 Sayfalar
import HomePage from '../pages/HomePage.vue'
const ContactPage = () => import('../pages/ContactPage.vue')
const TeamPage = () => import('../pages/TeamPage.vue')
const PracticeAreasPage = () => import('../pages/PracticeAreasPage.vue')

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/ekibimiz', name: 'Team', component: TeamPage },
  { path: '/calisma-alanlarimiz', name: 'PracticeAreas', component: PracticeAreasPage },
  {
    path: '/calisma-alanlarimiz/:slug',
    name: 'PracticeAreaDetail',
    component: () => import('../pages/PracticeAreaDetail.vue'),
  },
  {
    path: '/kariyer',
    name: 'CareerPage',
    component: () => import('../pages/CareerPage.vue'),
  },
  {
    path: '/iletisim',
    name: 'ContactPage',
    component: ContactPage,
  },
  {
    path: '/blog',
    name: 'BlogPage',
    component: () => import('../pages/BlogPage.vue'),
  },

  // bilinmeyen URL'lerde ana sayfaya yönlendir
  { path: '/:pathMatch(.*)*', redirect: '/' },
  {
  path: '/hesaplama-araclari',
  name: 'HesaplamaAraclari',
  component: () => import('../pages/HesaplamaAraclariPage.vue')
}

]

export default createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})
