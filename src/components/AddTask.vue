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
  <v-card>
    <v-card-title>新しいタスクを追加する</v-card-title>
    <div>
      <p>タスク名</p>
      <v-text-field label="タスク名をここに入力" v-model="newTask.title"></v-text-field>
    </div>
    <div>
      <p>概要</p>
      <v-col cols="8">
        <v-text-field label="概要をここに入力" v-model="newTask.description"></v-text-field>
      </v-col>
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
    <button @click="sendNewTask">送信する</button>
  </v-card>
</template>

<style lang="scss" scoped></style>
