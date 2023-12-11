<script setup lang="ts">
import TaskItem from '@/components/TaskItem.vue'

const props = defineProps<{
  title: string
  taskList: { Id: string; name: string; description: string }[]
}>()
</script>

<template>
  <h1>{{ props.title }}</h1>
  <div v-for="item in props.taskList" :key="item.Id">
    <task-item :name="item.name" :Id="item.Id" :description="item.description" />
  </div>
</template>

<style lang="scss" scoped>
h1 {
  background-color: white;
}
</style>
