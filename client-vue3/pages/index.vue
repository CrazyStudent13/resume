<template>
  <div class="resume">
    <div class="resume-header">
      <BaseInfo />
    </div>
    <div class="resume-body">
      <SkillExp />
      <CompanyExp />
      <ProjectExp />
      <SelfIntro />
      <Education />
    </div>
  </div>
</template>

<script setup lang="tsx">
import BaseInfo from '@/components/BaseInfo/index.vue'
import SkillExp from '@/components/SkillExp/index.vue'
import CompanyExp from '@/components/CompanyExp/index.vue'
import ProjectExp from '@/components/ProjectExp/index.vue'
import SelfIntro from '@/components/SelfIntro/index.vue'
import Education from '@/components/Education/index.vue'
import { useNuxtStore } from '~/store'
import { useBaseInfoStore } from '~/store/modules/baseInfo'
const store = useBaseInfoStore()
console.log(store)
// const storeAll = useNuxtStore()
// console.log(storeAll)
// console.log(storeAll)

</script>

<style lang="scss" scoped>
.resume {
  width: 840px;
  margin: 0 auto;
  padding: 4px 32px;
  // background: var(--el-color-primary);
  background: white;
  // color:white;
  color: black;
  text-align: center;

  &-header {
    width: 70%;
  }

  &-body {
    min-height: 100vh;
  }
}
</style>
