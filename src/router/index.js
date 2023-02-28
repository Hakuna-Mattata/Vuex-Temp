import { createRouter, createWebHistory } from 'vue-router'
import HomeComp from '../views/Home'
import AboutComp from '../views/About'

const routes = [
  {
    path: '/about',
    name: 'About',
    component: AboutComp,
  },
  {
    path: '/',
    name: 'Home',
    component: HomeComp,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
