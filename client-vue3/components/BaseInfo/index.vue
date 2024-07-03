<template>
  <el-descriptions :column="3" style="margin-top: 32px">
    <template #title>
      <h2>{{ baseInfo.jobname }} - {{ baseInfo.name }}</h2>
    </template>

    <el-descriptions-item label="性别">{{ baseInfo.sex }}</el-descriptions-item>
    <el-descriptions-item label="年龄">{{ baseInfo.age }}岁</el-descriptions-item>
    <el-descriptions-item label="工作经验">{{ baseInfo.jobAge }}年</el-descriptions-item>
    <el-descriptions-item label="学历">{{ baseInfo.education }}</el-descriptions-item>
    <el-descriptions-item label="学校">{{ baseInfo.school }}</el-descriptions-item>
    <el-descriptions-item label="期望薪资">{{ baseInfo.minSalary }} ~ {{ baseInfo.maxSalary }}</el-descriptions-item>
    <el-descriptions-item label="期望所在地">{{ baseInfo.expectLocation }}</el-descriptions-item>
    <el-descriptions-item label="当前所在地">{{ baseInfo.currentLocation }}</el-descriptions-item>
  </el-descriptions>
</template>

<script setup lang="tsx">
// 基本信息
const baseInfo = {
  name: '叶远川',
  jobname: '前端开发工程师',
  sex: '男',
  age: '29',
  jobAge: '5',
  tel: '18650885088',
  email: 'crazystudent13@qq.com',
  currentLocation: '苏州（相城区）',
  school: '南京铁道职业技术学院',
  expectLocation: '苏州（相城区优先）',
  minSalary: '15k',
  maxSalary: '17k',
  education: '大专',
}
</script>

<style lang="scss" scoped></style>
