<template>
  <el-row>
    <el-col :span="23">
      <h2 style="text-align: left">{{ resumeInfo.jobname }} - {{ resumeInfo.name }}</h2>

      <el-descriptions :column="2" style="margin-top: 32px">
        <el-descriptions-item>
          <template #label>
            <span class="title">性别</span>
          </template>
          <span class="value">{{ resumeInfo.sex }}</span>
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <span class="title">年龄</span>
          </template>
          <span class="value">{{ resumeInfo.age }}岁</span>
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <span class="title">工作经验</span>
          </template>
          <span class="value">{{ resumeInfo.jobAge }}年</span>
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <span class="title">学历</span>
          </template>
          <span class="value">{{ resumeInfo.educationLevel }}</span>
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <span class="title">学校</span>
          </template>
          <span class="value">{{ resumeInfo.school }}</span>
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <span class="title">期望薪资</span>
          </template>
          <span class="value">{{ resumeInfo.minSalary }} ~ {{ resumeInfo.maxSalary }}</span>
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <span class="title">期望所在地</span>
          </template>
          <span class="value">{{ resumeInfo.expectLocation }}</span>
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <span class="title">当前所在地</span>
          </template>
          <span class="value">{{ resumeInfo.currentLocation }}</span>
        </el-descriptions-item>
      </el-descriptions>
    </el-col>
    <el-col :span="1">
      <div class="avatar">
        <el-avatar class="center-absolute" shape="fill" :size="100" :src="'https://crazystudent13.cn/images/avatar.png '" />
      </div>
    </el-col>
  </el-row>
</template>

<script setup lang="tsx">
import { useNuxtStore } from '~/store'
const store = useNuxtStore()
const resumeInfo = { ...store }
</script>

<style lang="scss" scoped>
.avatar {
  position: relative;
  width: 300px;
  height: 100%;
}

.center-absolute {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
}

.title {
  color: black;
  font-weight: bold;
}

.value {
  color: black;
}
</style>
