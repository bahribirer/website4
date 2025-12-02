import { createRouter, createWebHashHistory } from 'vue-router'

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
      { path: 'hakkimizda', component: () => import('../pages/Hakkimizda.vue') },
      { path: 'ekibimiz', component: () => import('../pages/TeamPage.vue') },
      { path: 'team/:slug', component: () => import('../pages/TeamMemberPage.vue') },
      { path: 'calisma-alanlarimiz', component: () => import('../pages/PracticeAreasPage.vue') },
      { path: 'calisma-alanlarimiz/:key', component: () => import('../pages/PracticeAreaDetail.vue') },
      { path: 'kariyer', component: () => import('../pages/CareerPage.vue') },
      { path: 'iletisim', component: () => import('../pages/ContactPage.vue') },
      { path: 'blog', component: () => import('../pages/BlogPage.vue') },
      { path: 'hesaplama-araclari', component: () => import('../pages/HesaplamaAraclariPage.vue') },
    ],
  },

  { path: '/:pathMatch(.*)*', redirect: '/' }
]

export default createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})
