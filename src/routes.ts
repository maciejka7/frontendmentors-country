import { createRouter, createWebHashHistory, createWebHistory, RouteComponent, RouteParams, RouteRecord } from 'vue-router'

const Home = () => import('./views/Home/Home.vue')
const Country = () => import('./views/Country/Country.vue')

const routes = [
  { path: '/', component: Home },
  { path: '/country/:countryCode', name: 'country', component: Country },
  {path: '/:catchAll(.*)', redirect: '/'}
]

export const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})