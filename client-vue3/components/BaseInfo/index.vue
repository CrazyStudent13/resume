<template>
  <el-row>
    <el-col :span="23">
      <h2 style="text-align: left">{{ baseInfo.jobname }} - {{ baseInfo.name }}</h2>

      <el-descriptions :column="3" style="margin-top: 32px">
        <el-descriptions-item>
          <template #label>
            <span class="title">性别</span>
          </template>
          <span class="value">{{ baseInfo.sex }}</span>
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <span class="title">年龄</span>
          </template>
          <span class="value">{{ baseInfo.age }}岁</span>
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <span class="title">工作经验</span>
          </template>
          <span class="value">{{ baseInfo.jobAge }}年</span>
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <span class="title">学历</span>
          </template>
          <span class="value">{{ baseInfo.educationLevel }}</span>
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <span class="title">学校</span>
          </template>
          <span class="value">{{ baseInfo.school }}</span>
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <span class="title">期望薪资</span>
          </template>
          <span class="value">{{ baseInfo.minSalary }} ~ {{ baseInfo.maxSalary }}</span>
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <span class="title">期望所在地</span>
          </template>
          <span class="value">{{ baseInfo.expectLocation }}</span>
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <span class="title">当前所在地</span>
          </template>
          <span class="value">{{ baseInfo.currentLocation }}</span>
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
const baseInfo = { ...store }
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
