<template>
  <div class="cardInfo">
    <h3>教育经历</h3>
    <ul style="text-align: left">
      <li v-for="(item, index) in educationList" :key="index" class="education">
        <span class="education-item education-level">{{ item.level }}</span>
        <span class="education-item education-time">{{ item.startTime }} ~ {{ item.endTime }}</span>
        <span class="education-item education-school">{{ item.school }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="tsx">
const educationList = [
  {
    school: '南京铁道职业技术学院',
    level: '大专',
    startTime: '2015.09',
    endTime: '2018.06',
  },
  {
    school: '南京航空航天大学(在考)',
    level: '本科',
    startTime: '2023.03',
    endTime: '至今',
  },
]
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
