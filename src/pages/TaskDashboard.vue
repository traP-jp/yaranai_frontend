<script setup lang="ts">
import TaskItem from '@/components/TaskItem.vue'
</script>

<template>
  <h1>ダッシュボード</h1>
  <div>
    <task-item
      :-id="'100'"
      :name="'aaa'"
      :description="'いついつまでに〇〇さんに提出する必要がある'"
    />
  </div>
</template>

<style lang="scss" module></style>
