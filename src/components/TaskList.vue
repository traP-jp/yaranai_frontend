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
@import '../assets/base.scss';

h2 {
  background-color: var(--color-background-soft);
  font-style: normal;
  line-height: normal;
}
.listContainer {
  width: 30vw;
  height: fit-content;
  max: {
    width: 100vw;
    height: 40vh;
  }
  background-color: var(--color-background-soft);
  overflow: {
    y: auto;
    x: hidden;
  }
  &[horizontalScroll='true'] {
    width: 90vw;
    height: fit-content;
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
