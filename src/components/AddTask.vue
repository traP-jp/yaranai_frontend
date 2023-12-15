<script setup lang="ts">
import apiClient from '@/apis'
import type { taskWithoutId } from '@/apis/generated'
import { ref } from 'vue'

const newTask = ref<taskWithoutId>({
  title: '',
  description: '',
  condition: 0,
  difficulty: 0,
  dueDate: ''
})

const sendNewTask = () => {
  apiClient.task.postTasks(newTask.value)
}
</script>

<template>
  <div>
    <h2>新しいタスクを追加する</h2>
    <v-btn @click="sendNewTask">送信する</v-btn>
  </div>
</template>

<style lang="scss" scoped></style>
