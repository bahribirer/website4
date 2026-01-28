import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

// layout
import DefaultLayout from '../layouts/DefaultLayout.vue'

// sayfalar
import HomePage from '../pages/HomePage.vue'

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      { path: '', name: 'Home', component: HomePage },
      { path: 'hakkimizda', alias: ['/about', '/about-us'], component: () => import('../pages/Hakkimizda.vue') },
      { path: 'ekibimiz', alias: ['/team', '/our-team'], component: () => import('../pages/TeamPage.vue') },
      { path: 'calisma-alanlarimiz', alias: ['/practice-areas', '/areas'], component: () => import('../pages/PracticeAreasPage.vue') },
      { path: 'iletisim', alias: ['/contact'], component: () => import('../pages/ContactPage.vue') },
      { path: 'blog', component: () => import('../pages/BlogPage.vue') },
      { path: 'hesaplama-araclari', component: () => import('../pages/HesaplamaAraclariPage.vue') },
    ],
  },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})
