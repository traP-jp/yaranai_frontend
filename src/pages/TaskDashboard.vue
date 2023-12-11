<script setup lang="ts">
import TaskList from '@/components/TaskList.vue'

const taskLista: { Id: string; name: string; description: string }[] = [
  {
    name: 'aaa',
    Id: 'aaa',
    description: 'aaaaaa'
  },
  {
    name: 'aaa',
    Id: 'avs',
    description: 'aaaaaa'
  },
  {
    name: 'aaa',
    Id: 'gsag',
    description: 'aaaaaa'
  },
  {
    name: 'aaa',
    Id: 'hdsg',
    description: 'aaaaaa'
  }
]
</script>

<template>
  <h1>ダッシュボード</h1>
  <div class="pageContainer">
    <div>
      <task-list :title="'こなしやすいタスク'" :task-list="taskLista" />
    </div>
    <div>
      <task-list :title="'ほどほどにこなしやすいタスク'" :task-list="taskLista" />
    </div>
    <div>
      <task-list :title="'こなしにくいタスク'" :task-list="taskLista" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.pageContainer {
  display: flex;
}
</style>
