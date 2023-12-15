import { createRouter, createWebHistory } from 'vue-router'
import TaskDashboard from '@/pages/TaskDashboard.vue'
import AddTask from '@/components/AddTask.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TaskDashboard
    },
    {
      path: '/Add',
      name: 'タスクの追加',
      component: AddTask
    }
  ]
})

export default router
