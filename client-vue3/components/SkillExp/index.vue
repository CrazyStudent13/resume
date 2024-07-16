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
import { useNuxtStore } from '~/store'
const store = useNuxtStore()
const resumeInfo = { ...store }

const skillList = reactive<any>({
  data: resumeInfo.skill
})

</script>

<style lang="scss" scoped>
</style>
