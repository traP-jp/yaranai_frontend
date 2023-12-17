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

const difficultylist = [
  { id: 0, name: 'ハードルが低い' },
  { id: 1, name: 'ハードルが普通' },
  { id: 2, name: 'ハードルが高い' }
]
const conditionList = ref<conditions>([
  { id: 0, name: 'aaa' },
  { id: 1, name: 'ddd' },
  { id: 2, name: 'fff' },
  { id: 3, name: 'aaggga' },
  { id: 4, name: 'aahha' },
  { id: 5, name: 'aaja' }
])

apiClient.condition.getConditions().then((res) => (conditionList.value = res))

const sendNewTask = () => {
  apiClient.task.postTasks(newTask.value)
}
</script>

<template>
  <v-card width="60vw">
    <v-card-title>新しいタスクを追加する</v-card-title>
    <div>
      <v-text-field
        label="タスク名"
        placeholder="タスク名をここに入力"
        v-model="newTask.title"
      ></v-text-field>
    </div>
    <div>
      <v-text-field
        label="概要"
        placeholder="概要をここに入力"
        v-model="newTask.description"
      ></v-text-field>
    </div>
    <v-radio-group type="a" label="ハードルの設定" v-model="newTask.difficulty">
      <span v-for="item in difficultylist" :key="item.id">
        <v-radio :label="`${item.name}`" color="black" :multiple="false" :value="item.id" />
      </span>
    </v-radio-group>
    <div>
      <v-radio-group type="a" label="状況" v-model="newTask.condition">
        <span v-for="item in conditionList" :key="item.id">
          <v-radio :label="`${item.name}`" color="black" :multiple="false" :value="item.id" />
        </span>
      </v-radio-group>
    </div>
    <div>
      <p>締め切り</p>
    </div>
    <v-btn @click="sendNewTask">送信する</v-btn>
  </v-card>
</template>

<style lang="scss" scoped></style>
