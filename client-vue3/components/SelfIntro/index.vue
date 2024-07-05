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
const SelfIntro = reactive<any>([
  '工作认真负责，能快速通过合作保质保量完成',
  '适应环境能力强，抗压能力强，能够快速的了解新技术并进行应用',
  '有极强的团队协作能力，善于与领导和同事之间和谐相处'
])
</script>