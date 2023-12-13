<script setup lang="ts">
import TaskList from '@/components/TaskList.vue'
import type { task } from '../apis/generated'

const taskLista: task[] = [
  {
    id: 1,
    title: '電磁気学の課題',
    condition: 998244353,
    difficulty: 2,
    dueDate: '2021-10-10',
    description: 'やる'
  },
  {
    id: 2,
    title: '単位認定の申請',
    condition: 5,
    difficulty: 3,
    dueDate: '2021-10-10',
    description: 'スコアレポートを提出'
  },
  {
    id: 3,
    title: '単位認定の申請',
    condition: 5,
    difficulty: 1,
    dueDate: '2021-10-10',
    description: 'スコアレポートを提出'
  }
]
</script>

<template>
  <h1>ダッシュボード</h1>
  <br>
  <h2>Yaranai</h2>
  <br>
  <div>
    <div><task-list :title="'おすすめのタスク'" :task-list="taskLista" :filtersignal="1" />
    </div>  
    <button v-on="null">やりたくない</button>
  </div>

  <div>
    <task-list :title="'未設定項目のあるタスク'" :task-list="taskLista" :filtersignal="1" />
  </div> 
  <br>
  <button v-on="null">タスクを追加</button>
  <br>
  <div class="pageContainer">
    <div>
      <task-list :title="'こなしやすいタスク'" :task-list="taskLista" :filtersignal="1" />
    </div>
    <div>
      <task-list :title="'ほどほどにこなしやすいタスク'" :task-list="taskLista" :filtersignal="2" />
    </div>
    <div>
      <task-list :title="'こなしにくいタスク'" :task-list="taskLista" :filtersignal="3" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.pageContainer {
  display: flex;
}
</style>
