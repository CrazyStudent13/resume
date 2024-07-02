<template>
  <el-container class="resume">
    <el-header class="resume-header">
      <el-descriptions :column="3" style="margin-top:32px;">
        <template #title>
          {{ resume.model.jobname }} - {{ resume.model.name }}
        </template>

        <el-descriptions-item label="性别">{{ resume.model.sex }} </el-descriptions-item>
        <el-descriptions-item label="年龄">{{ resume.model.age }}岁</el-descriptions-item>
        <el-descriptions-item label="工作经验">{{ resume.model.jobAge }}年</el-descriptions-item>
        <el-descriptions-item label="学历">{{ resume.model.education }}</el-descriptions-item>
        <el-descriptions-item label="学校">{{ resume.model.school }}</el-descriptions-item>
        <el-descriptions-item label="期望薪资">{{ resume.model.minSalary }} ~ {{ resume.model.maxSalary }}</el-descriptions-item>
        <el-descriptions-item label="期望所在地">{{ resume.model.expectLocation }}</el-descriptions-item>
        <el-descriptions-item label="当前所在地">{{ resume.model.currentLocation }}</el-descriptions-item>
      </el-descriptions>
    </el-header>
    <el-container class="resume-body">

    </el-container>
  </el-container>
</template>

<script setup lang="tsx">
// 基本信息
const baseInfo = {
  name: "叶远川",
  jobname: "前端开发工程师",
  sex: "男",
  age: "29",
  jobAge: "5",
  tel: "18650885088",
  email: "crazystudent13@qq.com",
  currentLocation: "苏州（相城区）",
  school: '南京航空航天大学（在考）',
  expectLocation: "苏州（相城区优先）",
  minSalary: "15k",
  maxSalary: "17k",
  education: "本科",
};

// 专业技能
const skillInfo = {}

// 项目经历
const projectInfo  = {}

const resume = reactive<any>({
  model: {},
});

resume.model = { ...baseInfo };
</script>

<style lang="scss" scoped>
.resume {
  width: 1200px;
  text-align: center;
  margin: 0 auto;
  background: var(--el-color-primary);
  padding: 32px;
  &-header {
    width: 60%;
    height: 200px;
  }

  &-body {
  }
}
</style>
