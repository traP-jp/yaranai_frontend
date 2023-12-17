<script setup lang="ts">
import { ref } from 'vue'
import type { conditions } from '@/apis/generated'
import apiClient from '@/apis'
const conditionList = ref<conditions>()

apiClient.condition.getConditions().then((res) => (conditionList.value = res))

const deleteCondition = (id: number) => {
  apiClient.condition.deleteCondition(id)
}
</script>

<template>
  <h2>状況一覧</h2>
  <div class="listContainer">
    <div v-for="cond in conditionList" :key="cond.id">
      {{ cond.name }}
      <v-btn @click="deleteCondition(cond.id)">削除する</v-btn>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.listContainer {
  width: 70vw;
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
}
</style>
