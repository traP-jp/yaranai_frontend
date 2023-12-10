import { createRouter, createWebHistory } from 'vue-router'
import TaskDashboard from '@/pages/TaskDashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TaskDashboard
    }
  ]
})

export default router
