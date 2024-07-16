<template>
  <div class="cardInfo">
    <h3>个人介绍</h3>
    <ul class="cardInfo-body">
      <li v-for="(item, index) in SelfIntro" :key="index">
        <span>{{ item }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="tsx">
import { useNuxtStore } from '~/store'
const store = useNuxtStore()
const resumeInfo = { ...store }

const SelfIntro = [...resumeInfo.selfIntro]
</script>
