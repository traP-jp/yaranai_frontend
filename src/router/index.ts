import { createRouter, createWebHistory } from 'vue-router'
import TaskDashboard from '@/pages/TaskDashboard.vue'
import AddTask from '@/components/AddTask.vue'
import AddCondition from '@/components/AddCondition.vue'
import ConditionList from '@/components/ConditionList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'TaskDashboard',
      component: TaskDashboard
    },
    {
      path: '/AddTask',
      name: 'AddTask',
      component: AddTask
    },
    {
      path: '/AddCondition',
      name: 'AddCondition',
      component: AddCondition
    },
    {
      path: '/conditionList',
      name: 'ConditionList',
      component: ConditionList
    }
  ]
})

export default router
