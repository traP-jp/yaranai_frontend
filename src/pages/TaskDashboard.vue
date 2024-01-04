<script setup lang="ts">
import { ref } from 'vue'
import TaskList from '@/components/TaskList.vue'
import apiClient from '../apis/index'
import type { tasks } from '../apis/generated'
import router from '@/router'

const taskLista = ref<tasks>([])

const suggest = ref<tasks>([])
const difficulty = ref(3)
apiClient.task.getTasks().then((res) => (taskLista.value = res))
apiClient.suggestion.getSuggest(difficulty.value.toString()).then((res) => (suggest.value = res))

const moveToAddTask = () => {
  router.push('/AddTask')
}
const moveToAddCondition = () => {
  router.push('/AddCondition')
}
const moveToConditionList = () => {
  router.push('/conditionList')
}

const ButtonStatus = ref(false)
const changeSuggestion = () => {
  if (difficulty.value === 1) {
    ButtonStatus.value = true
  } else {
    difficulty.value--
  }
}
</script>

<template>
  <div>
    <h1>Yaranai</h1>
    <!-- <br /> -->
    <div class="pageContainer">
      <img src="../assets/zondicons_light-bulb.svg" />
      <task-list
        :title="'おすすめのタスク'"
        :task-list="suggest"
        :difficulty="1"
        :horizontal-scroll="true"
      />
    </div>
    <v-btn @click="changeSuggestion" v-bind:disabled="ButtonStatus">やりたくない</v-btn>
    <br />
    <div class="pageContainer">
      <img src="../assets/icon-park-outline_caution.svg" />
      
      <task-list
        :title="'未設定項目のあるタスク'"
        :task-list="taskLista"
        :difficulty="1"
        :horizontal-scroll="true"
      />
      <br />
    </div>
    <div style="display: block; overflow-wrap: break-word">
      <div>
        <v-btn @click="moveToAddCondition">状況を追加</v-btn>
      </div>
      <div>
        <v-btn @click="moveToConditionList">状況の削除</v-btn>
      </div>
      <div>
        <v-btn @click="moveToAddTask">タスクを追加</v-btn>
      </div>
    </div>
    <div class="listContainer">
      <div>
        <task-list
          :title="'ハードルが低い'"
          :task-list="taskLista"
          :difficulty="1"
          :horizontal-scroll="false"
        />
      </div>
      <div>
        <task-list
          :title="'ハードルが普通'"
          :task-list="taskLista"
          :difficulty="2"
          :horizontal-scroll="false"
        />
      </div>
      <div>
        <task-list
          :title="'ハードルが高い'"
          :task-list="taskLista"
          :difficulty="3"
          :horizontal-scroll="false"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/base.scss';

.pageContainer {
  display: flex;
  justify-content: space-around;
}

h1 {
  color: var(--color-text);
  font-size: 90px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

button {
  width: 177px;
  height: 24px;
  line-height: 12px;
  background: white;
  color: black;
  text-align: center;
  border-radius: 100vh;
  font-size: 18px;
  font-family: inherit;
}

.listContainer {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
}
</style>
