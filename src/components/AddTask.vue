<script setup lang="ts">
import apiClient from '@/apis'
import type { conditions, taskWithoutId } from '@/apis/generated'
import { ref } from 'vue'

const newTask = ref<taskWithoutId>({
  title: '',
  description: '',
  condition: 0,
  difficulty: 0,
  dueDate: ''
})

const conditionList = ref<conditions>([])

apiClient.condition.getConditions().then((res) => (conditionList.value = res))

const sendNewTask = () => {
  apiClient.task.postTasks(newTask.value)
}
</script>

<template>
  <div>
    <h2>新しいタスクを追加する</h2>
    <div>
      <p>タスク名</p>
    </div>
    <div>
      <p>概要</p>
    </div>
    <div>
      <p>ハードル</p>
    </div>
    <div>
      <p>状況</p>
      <span v-for="item in conditionList" :key="item.id"> <v-btn />{{ item.name }} </span>
    </div>
    <div>
      <p>締め切り</p>
    </div>
    <v-btn @click="sendNewTask">送信する</v-btn>
  </div>
</template>

<style lang="scss" scoped></style>
