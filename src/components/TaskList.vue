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
    <h2>{{ props.title }}</h2>
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
h2 {
  background-color: white;
  font-style: normal;
  line-height: normal;
}
.listContainer {
  max: {
    width: 100vw;
    height: 60vh;
  }
  background-color: white;
  overflow: {
    y: auto;
    x: hidden;
  }
  &[horizontalScroll='true'] {
    width: 90vw;
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
  }
}

::-webkit-scrollbar {
  width: 7px;
}
::-webkit-scrollbar-track {
  background-color: #ccc;
}
::-webkit-scrollbar-thumb {
  background-color: gray;
  border-radius: 7px;
}
</style>
