<script setup lang="ts">
import type { task } from '../apis/generated'
const props = defineProps<{
  cont: task
}>()
</script>

<template>
  <div class="container">
    <div class="checkmark" onclick="console.log('あとでHTTPリクエストを送る')">✓</div>
    <div class="title">
      {{ props.cont.title }}
    </div>
    <div class="condition">
      <p class="conditiontext">{{ props.cont.condition }}</p>
    </div>
    <div class="due">
      {{ props.cont.dueDate }}
    </div>
    <div class="description">
      {{ props.cont.description }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.title {
  font-size: 18px;
  width: 150px;
}
.checkmark {
  margin: 5px;
  float: right;
  width: 30px;
  height: 30px;
  text-align: center;
  border-radius: 50%;
  /*border: 1px solid rgba(0, 0, 0, 0.3);*/
}
.checkmark:hover {
  background-color: rgba(0, 0, 0, 0.3);
}
.condition {
  display: flex;
  width: fit-content;
  height: fit-content;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #000;
  border-radius: 6px;
  background: rgba(0, 0, 0, 0.1);
}
.conditiontext {
  padding: 4px;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.container {
  max-width: 100%;
  width: 300px;
  height: auto;
  border: 5px;
  box-shadow: 5px;
  background-color: white;
  border-radius: 10px;
  padding: auto;
  padding-left: 20px;
  border-radius: 6px;
  border: 1px solid #959595;
}
</style>
