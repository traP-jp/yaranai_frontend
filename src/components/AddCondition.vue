<script setup lang="ts">
import apiClient from '@/apis'
import router from '@/router';
import { ref } from 'vue'

const conditionReq = ref<{ name: string }>({ name: '' })

const sendNewCondition = () => {
  apiClient.condition.postCondition(conditionReq.value)
}

const sendBackToDashboard = () => {
  sendNewCondition()
  router.push('/')
}
const sendContinuingPost = () => {
  sendNewCondition()
  conditionReq.value.name = ''
}
</script>

<template>
  <v-card width="60vw">
    <v-card-title>新しい状況を追加する</v-card-title>
    <div>
      <v-text-field
        label="状況名"
        placeholder="タスクのこなせる状況名をここに入力"
        v-model="conditionReq.name"
      />
    </div>
    <v-btn @click="sendBackToDashboard">送信してダッシュボードにもどる</v-btn>
    <v-btn @click="sendContinuingPost">送信し、このまま登録を続ける</v-btn>
  </v-card>
</template>

<style lang="scss" scoped></style>
