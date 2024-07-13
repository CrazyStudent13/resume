<template>
  <div class="cardInfo">
    <h3>项目经历</h3>
    <div class="cardInfo-body">
      <div class="projectInfo" v-for="(item, index) in projectExpList.data" :key="index">
      <h4>
        <span style="margin-right:10px;">{{ item.name }}</span>
        <span>{{ item.startTime }} ~ {{ item.endTime }}</span>
      </h4>
      <div style="margin-left: 16px;">
        <h5 style="margin-left: 8px;margin: 0">业务需求</h5>
        <p style="margin-left: 8px;margin: 8px">
          1，从各项目现场整合核心需求，参与评审，提出技术方案,确保项目安全, 并主导了前端的产品化<br />
          2，解决了项目多平台热更新打包时间久，文件大，部署配置未热更新等问题<br />
        </p>
        <h5 style="margin-left: 8px;margin: 0">业务难点</h5>
        <p style="margin-left: 8px;margin: 8px">
          1，从各项目现场整合核心需求，参与评审，提出技术方案,确保项目安全, 并主导了前端的产品化<br />
          2，解决了项目多平台热更新打包时间久，文件大，部署配置未热更新等问题<br />
        </p>
        <h5 style="margin-left: 8px;margin: 0">解决方案</h5>
        <p style="margin-left: 8px;margin: 8px">
          1，从各项目现场整合核心需求，参与评审，提出技术方案,确保项目安全, 并主导了前端的产品化<br />
          2，解决了项目多平台热更新打包时间久，文件大，部署配置未热更新等问题<br />
        </p>
        <h5 style="margin-left: 8px;margin: 0">个人业绩</h5>
        <p style="margin-left: 8px;margin: 8px">
          1，从各项目现场整合核心需求，参与评审，提出技术方案,确保项目安全, 并主导了前端的产品化<br />
          2，解决了项目多平台热更新打包时间久，文件大，部署配置未热更新等问题<br />
          3，快速响应各个项目现场，组件封装，优化代码，稳定各个项目现场的使用，使得更加敏捷的推进项目部分功能。<br />
          4，负责配合 UI 设计、产品及后台开发人员协作/联调，高效优质完成项目的产出交付工作 <br />
          5，培养了可以接手核心合同模块和账单模块的梯队。<br />
        </p>
      </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="tsx">
import { reactive } from 'vue'
const projectExpList = reactive<any>({
  data: []
})

onMounted(() => {
  projectExpList.data = [
    {
      name: '资产管理系统',
      startTime: '2019-09',
      endTime: '2021-01',
      content: ''
    },
  ]
})
</script>