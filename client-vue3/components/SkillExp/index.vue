<template>
  <div class="cardInfo">
    <h3>技能列表</h3>
    <div class="cardInfo-body">
      <p v-for="(list, index) in skillList.data" :key="index">
        <ul style="text-align:left">
          <li v-for="(item,skillIndex) in list.data" :key="skillIndex">
            <span >{{ item }}</span>
          </li>
        </ul>
      </p>
    </div>
  </div>
</template>

<script setup lang="tsx">
import { reactive } from 'vue'
const skillList = reactive<any>({
  data:[]
})

onMounted(() =>{
  skillList.data = [{
    title: '前端技能',
    data: [
      '熟练掌握ES6,精通使用H5，CSS3的页面还原',
      '精通ES6特性',
      '熟悉NodeJS及Express框架的使用',
      '熟练使用vue+elementUI还原页面，搭建系统',
      '精通uni-app，使用uView还原手机端页面，适配微信小程序，H5端',
      '熟悉bpmn.js，搭建前端工作流',
      '搭建公司内js工具包，组织小组成员搭建前端工具库',
      '熟悉nginx工具的配置,熟悉配置Linux服务器相关配置流程',
    ],
  }]
})
</script>

<style lang="scss" scoped>
</style>
