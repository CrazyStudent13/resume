<template>
  <div class="cardInfo">
    <h3>工作经历</h3>

    <div class="cardInfo-body">
      <el-table :data="companyInfoList" style="width: 100%">
        <el-table-column prop="date" label="起止时间" width="180">
          <template #default="scope">{{ scope.row.startTime }} ~ {{ scope.row.endTime }}</template>
        </el-table-column>
        <el-table-column prop="base" label="工作地" width="180" />
        <el-table-column prop="name" label="公司名称" />
      </el-table>
    </div>
  </div>
</template>

<script setup lang="tsx">
const companyInfoList = [
  {
    name: '中资科技(江苏)',
    base: '苏州',
    startTime: '2018.07',
    endTime: '2023.02',
  },
  {
    name: '双盛科技（小袋鼠徐州分部）',
    base: '徐州',
    startTime: '2024.06',
    endTime: '至今',
  },
]
</script>

<style lang="scss" scoped>
.companyInfo {
  span {
    width: 200px;
  }
  &-item {
    margin-right: 16px;
  }
}
</style>
