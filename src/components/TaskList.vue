<script setup lang="ts">
import TaskItem from '@/components/TaskItem.vue'
import type { tasks } from '../apis/generated'
const props = defineProps<{
  title: string
  taskList: tasks
  filterSignal: number
}>()
</script>

<template>
  <div>
    <h1>{{ props.title }}</h1>
    <h2>
      <div v-for="item in props.taskList" :key="item.id">
        <div v-if="item.difficulty === props.filterSignal">
          <task-item :cont="item" />
        </div>
      </div>
    </h2>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  background-color: white;
}
h2 {
  width: 400px;
  height: 150px;
  background-color: white;
  overflow: hidden scroll;
}
</style>
