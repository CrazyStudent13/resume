import { baseUserInfo } from './modules/baseInfo'
import { companyInfo } from './modules/companyInfo'
import { educationInfo } from './modules/education'
import { projectInfo } from './modules/projectInfo'
import { selfIntroInfo } from './modules/selfIntroInfo'
import { skillInfo } from './modules/skillInfo'

export const useNuxtStore = defineStore('nuxtStore', {
  state: (): any => ({
    ...baseUserInfo,
    ...companyInfo,
    ...educationInfo,
    ...projectInfo,
    ...selfIntroInfo,
    ...skillInfo,
  }),
})
