declare interface BaseInfoType {
  name: string
  jobname: string
  sex: string
  age: string
  jobAge: string
  tel: string
  email: string
  currentLocation: string
  school: string
  expectLocation: string
  minSalary: string
  maxSalary: string
  education: string
}

// 公司信息
export const companyInfo = {
  company: [
    {
      name: '中资科技(江苏)',
      base: '苏州',
      startTime: '2018.07',
      endTime: '2024.02',
    },
    {
      name: '双盛科技（小袋鼠徐州分部）',
      base: '徐州',
      startTime: '2024.06',
      endTime: '至今',
    },
  ],
}
