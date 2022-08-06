import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue';
import Main from '../pages/Main.vue'

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  {
    path: '/',
    name: 'Main',
    component: Main
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
