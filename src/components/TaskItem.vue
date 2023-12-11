<script setup lang="ts">
const props = defineProps<{
  name: string
  Id: string
  description: string
}>()
</script>

<template>
  <div class="container">
    <div>
      {{ props.name }}
    </div>
    <div>
      {{ props.description }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  max-width: 100%;
  width: 30vw;
  height: auto;
  border: 5px;
  box-shadow: 5px;
  background-color: white;
  border-radius: 10px;
  padding: auto;
  padding-left: 20px;
}
</style>
