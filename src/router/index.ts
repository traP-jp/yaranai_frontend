import { createRouter, createWebHistory } from 'vue-router'
import TaskDashboard from '@/pages/TaskDashboard.vue'
import AddTask from '@/components/AddTask.vue'
import AddCondition from '@/components/AddCondition.vue'
import { mergeProps } from 'vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TaskDashboard
    },
    {
      path: '/AddTask',
      name: 'タスクの追加',
      component: AddTask
    },
    {
      path: '/AddCondition',
      name: '状況の追加',
      component: AddCondition
    }
  ]
})

export default router
