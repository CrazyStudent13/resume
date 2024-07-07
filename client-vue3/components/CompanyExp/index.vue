<template>
  <div class="cardInfo">
    <h3>工作经历</h3>

    <div class="cardInfo-body">
      <el-table :data="company" style="width: 100%;background: white;">
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
import { useNuxtStore } from '~/store'
const store = useNuxtStore()
console.log()
const company = store.company
</script>