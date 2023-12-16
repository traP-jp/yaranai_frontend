<script setup lang="ts">
import apiClient from '@/apis'
import { ref } from 'vue'

const conditionReq = ref<{ name: string }>({ name: '' })

const sendNewCondition = () => {
  apiClient.condition.postCondition(conditionReq.value)
}
</script>

<template>
  <v-card width="60vw">
    <v-card-title>新しいタスクを追加する</v-card-title>
    <div>
      <v-text-field
        label="状況名"
        placeholder="タスクのこなせる状況名をここに入力"
        :v-model="conditionReq.name"
      />
    </div>
    <v-btn @click="sendNewCondition">送信する</v-btn>
  </v-card>
</template>

<style lang="scss" scoped></style>
