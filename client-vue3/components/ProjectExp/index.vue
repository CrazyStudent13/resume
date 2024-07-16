<template>
  <div class="cardInfo">
    <h3>项目经历</h3>
    <div class="cardInfo-body">
      <div class="projectInfo" v-for="(item, index) in resumeInfo.project" :key="index">
      <h4>
        <span style="margin-right:32px;font-weight: 800;">{{ item.projectName }}</span>
        <span style="margin-right:12px;">{{ item.jobName }}</span>
        <span style="float: right;">{{ item.startTime }} ~ {{ item.endTime }}</span>
      </h4>
      <div style="margin-left: 16px;">
        <h5 style="margin-left: 8px;margin: 0">业务需求</h5>
        <p v-html="item.question" style="margin-left: 8px;margin: 8px">
        </p>
        <h5 style="margin-left: 8px;margin: 0">业务难点</h5>
        <p v-html="item.hardCore"  style="margin-left: 8px;margin: 8px">

        </p>
        <h5 style="margin-left: 8px;margin: 0">解决方案</h5>
        <p v-html="item.solution" style="margin-left: 8px;margin: 8px">
        </p>
        <h5 style="margin-left: 8px;margin: 0">个人业绩</h5>
        <p  v-html="item.result" style="margin-left: 8px;margin: 8px">
        </p>
      </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="tsx">
import { useNuxtStore } from '~/store'
const store = useNuxtStore()
const resumeInfo = { ...store }
</script>