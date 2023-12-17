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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="42"
        height="37"
        viewBox="0 0 42 37"
        fill="none"
      >
        <g clip-path="url(#clip0_211_254)">
          <path
            d="M14.553 24.3006C11.5676 23.0589 9.15294 20.9633 7.70617 18.3584C6.25939 15.7536 5.86658 12.7946 6.59236 9.96797C7.31813 7.14137 9.11926 4.61549 11.6996 2.80569C14.2799 0.995888 17.4857 0.00991821 20.79 0.00991821C24.0942 0.00991821 27.3 0.995888 29.8803 2.80569C32.4606 4.61549 34.2618 7.14137 34.9876 9.96797C35.7133 12.7946 35.3205 15.7536 33.8737 18.3584C32.427 20.9633 30.0123 23.0589 27.027 24.3006V29.168H14.553V24.3006ZM14.553 30.991H27.027V33.7255C27.027 35.2386 25.634 36.46 23.9085 36.46H17.6715C16.8444 36.46 16.0512 36.1719 15.4663 35.6591C14.8815 35.1463 14.553 34.4507 14.553 33.7255V30.991ZM18.711 21.6937V25.522H22.869V21.6937C25.3929 21.2419 27.6357 19.9845 29.1625 18.1651C30.6893 16.3458 31.3912 14.0941 31.1323 11.8467C30.8734 9.59932 29.672 7.51627 27.7612 6.00142C25.8503 4.48658 23.366 3.64785 20.79 3.64785C18.2139 3.64785 15.7296 4.48658 13.8187 6.00142C11.9079 7.51627 10.7065 9.59932 10.4476 11.8467C10.1887 14.0941 10.8906 16.3458 12.4174 18.1651C13.9442 19.9845 16.187 21.2419 18.711 21.6937Z"
            fill="black"
          />
        </g>
        <defs>
          <clipPath id="clip0_211_254">
            <rect width="41.58" height="36.46" fill="white" />
          </clipPath>
        </defs>
      </svg>
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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="41"
        height="41"
        viewBox="0 0 41 41"
        fill="none"
      >
        <g clip-path="url(#clip0_211_248)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20.5 2.27084C21.2137 2.27084 21.8733 2.65114 22.2309 3.26877L41.0226 35.7271C41.3808 36.3458 41.3815 37.1088 41.0244 37.7281C40.6672 38.3475 40.0067 38.7292 39.2917 38.7292H1.70837C0.993415 38.7292 0.332834 38.3475 -0.0242749 37.7281C-0.381384 37.1088 -0.380699 36.3458 -0.0224786 35.7271L18.7692 3.26877C19.1268 2.65114 19.7864 2.27084 20.5 2.27084ZM5.17727 34.7292H35.8228L20.5 8.26257L5.17727 34.7292Z"
            fill="black"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20.4984 14.2292C21.603 14.2283 22.4991 15.123 22.5 16.2276L22.5068 24.7693C22.5077 25.8738 21.613 26.77 20.5084 26.7709C19.4039 26.7717 18.5077 25.877 18.5068 24.7725L18.5 16.2308C18.4991 15.1262 19.3938 14.2301 20.4984 14.2292ZM20.5 27.8959C21.6046 27.8959 22.5 28.7913 22.5 29.8959V30.75C22.5 31.8546 21.6046 32.75 20.5 32.75C19.3954 32.75 18.5 31.8546 18.5 30.75V29.8959C18.5 28.7913 19.3954 27.8959 20.5 27.8959Z"
            fill="black"
          />
        </g>
        <defs>
          <clipPath id="clip0_211_248">
            <rect width="41" height="41" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <task-list
        :title="'未設定項目のあるタスク'"
        :task-list="taskLista"
        :difficulty="1"
        :horizontal-scroll="true"
      />
      <!-- <br /> -->
      <br />
    </div>
    <div class="pageContainer">
      <v-btn @click="moveToAddCondition">状況を追加</v-btn>
      <v-btn @click="moveToAddTask">タスクを追加</v-btn>
    </div>
    <!-- <br /> -->
    <div class="pageContainer">
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
</style>
