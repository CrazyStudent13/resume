<template>
  <div class="cardInfo">
    <h3>教育经历</h3>

    <ul class="cardInfo-body">
      <li v-for="(item, index) in education" :key="index" class="education">
        <span class="education-item education-level">{{ item.level }}</span>
        <span class="education-item education-time">{{ item.startTime }} ~ {{ item.endTime }}</span>
        <span class="education-item education-school">{{ item.school }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="tsx">
import { useNuxtStore } from '~/store'
const store = useNuxtStore()
const education = { ...store.education }
</script>

<style lang="scss" scoped>
.education {
  &-item {
    margin-right: 16px;
  }

  &-time {
    width: 200px;
  }
}
</style>
