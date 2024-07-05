import { useBaseInfoStore } from './modules/baseInfo'
// const test = useBaseInfoStore
// console.log(test.sex,'ceshi')

export const useNuxtStore = defineStore('nuxtStore', {
  state: (): any => ({
    // test
    // ...useBaseInfoStore,
  }),
  actions: {
    // setActiveProductName(name: string) {
    //   this.activeProductName = name
    // },
  },
})
