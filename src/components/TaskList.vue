<script setup lang="ts">
import TaskItem from '@/components/TaskItem.vue'
import type { task } from '../apis/generated'
const props = defineProps<{
  title: string
  taskList: task[]
}>()
</script>

<template>
  <h1>{{ props.title }}</h1>
  <div v-for="item in props.taskList" :key="item.id">
    <task-item :cont="item"/>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  background-color: white;
}
</style>
