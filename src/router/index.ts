import { createRouter, createWebHashHistory } from 'vue-router'

// Sayfalar
import HomePage from '../pages/HomePage.vue'
const ContactPage = () => import('../pages/ContactPage.vue')
const TeamPage = () => import('../pages/TeamPage.vue')
const PracticeAreasPage = () => import('../pages/PracticeAreasPage.vue')

const routes = [
  { path: '/', name: 'Home', component: HomePage },

  { path: '/hakkimizda', name: 'Hakkimizda', component: () => import('../pages/Hakkimizda.vue') },
  { path: '/ekibimiz', name: 'Team', component: TeamPage },
  { path: '/team/:slug', name: 'TeamMember', component: () => import('../pages/TeamMemberPage.vue') },

  { path: '/calisma-alanlarimiz', name: 'PracticeAreas', component: PracticeAreasPage },
  {
    path: '/calisma-alanlarimiz/:key',
    name: 'PracticeAreaDetail',
    component: () => import('../pages/PracticeAreaDetail.vue')
  },

  { path: '/kariyer', name: 'CareerPage', component: () => import('../pages/CareerPage.vue') },
  { path: '/iletisim', name: 'ContactPage', component: ContactPage },
  { path: '/blog', name: 'BlogPage', component: () => import('../pages/BlogPage.vue') },

  {
    path: '/hesaplama-araclari',
    name: 'HesaplamaAraclari',
    component: () => import('../pages/HesaplamaAraclariPage.vue')
  },

  // ❗ EN SONDA OLMALI ❗
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

export default createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})
