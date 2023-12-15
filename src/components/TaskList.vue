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
  <h1>{{ props.title }}</h1>
  <div class ="verticalScroll">
    <div v-for="item in props.taskList" :key="item.id">
      <div v-if="item.difficulty === props.filterSignal">
        <task-item :cont="item" />
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>
h1 {
  background-color: white;
}
.horizonScroll{
  width: 300px;
  height: 150px;
  background-color: white;
  overflow-y: hidden;
}
.verticalScroll{
  width: 400px;
  height: 200px;
  background-color: white;
  overflow-x: hidden ;
}

h1 {
  color: #000;
font-family: Noto Sans;
font-size: 30px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
</style>
