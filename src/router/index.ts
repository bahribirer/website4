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
      { path: 'hakkimizda', alias: ['/about', '/about-us', '/en/hakkimizda'], component: () => import('../pages/Hakkimizda.vue') },
      { path: 'ekibimiz', alias: ['/team', '/our-team', '/en/ekibimiz'], component: () => import('../pages/TeamPage.vue') },
      { path: 'ekibimiz/:slug', alias: ['/team/:slug'], component: () => import('../pages/TeamMemberPage.vue') },
      { path: 'calisma-alanlarimiz', alias: ['/practice-areas', '/areas', '/en/calisma-alanlarimiz'], component: () => import('../pages/PracticeAreasPage.vue') },
      { path: 'calisma-alanlarimiz/:key', alias: ['/practice-areas/:key'], component: () => import('../pages/PracticeAreaDetail.vue') },
      { path: 'iletisim', alias: ['/contact', '/en/iletisim'], component: () => import('../pages/ContactPage.vue') },
      { path: 'blog', alias: ['/en/blog'], component: () => import('../pages/BlogPage.vue') },
      { path: 'hesaplama-araclari', alias: ['/en/hesaplama-araclari'], component: () => import('../pages/HesaplamaAraclariPage.vue') },
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
