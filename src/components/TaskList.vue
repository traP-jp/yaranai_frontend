<script setup lang="ts">
import TaskItem from '@/components/TaskItem.vue'
import type { tasks } from '../apis/generated'
const props = defineProps<{
  title: string
  taskList: tasks
  difficulty: number
  horizontalScroll: boolean
}>()
</script>

<template>
  <div>
    <h1>{{ props.title }}</h1>
    <div class="listContainer" :horizontalScroll="`${horizontalScroll}`">
      <div v-for="item in props.taskList" :key="item.id">
        <div v-if="item.difficulty === props.difficulty">
          <task-item :cont="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// .horizonScroll {
//   width: 300px;
//   height: 150px;
//   background-color: white;
//   overflow-y: hidden;
// }
// .verticalScroll {
//   width: 500px;
//   height: 460px;
//   background-color: white;
//   overflow-x: hidden;
// }
h1 {
  background-color: white;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.listContainer {
  max: {
    width: 60vw;
    height: 30vh;
  }
  background-color: white;
  overflow: {
    y: auto;
    x: hidden;
  }
  &[horizontalScroll='true'] {
    width: 60vw;
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
  }
}
</style>
