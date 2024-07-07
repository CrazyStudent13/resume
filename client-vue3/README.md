### 简介

基于[element-plus-nuxt-starter](https://github.com/element-plus/element-plus-nuxt-starter)改造开发。

由Vue3 + Nuxt + Element PLUS实现的客户端展示页面，仅供线上简历展示使用。

推荐使用node20以上的开发环境，否则pnpm安装可能会导致一些问题。

### 安装依赖

```bash
pnpm install
```

### 开发

启动开发环境打开地址 `http://localhost:3000`

```bash
pnpm dev
```

### 静态页面生成

因为nuxt项目需要生成静态页面，所以这里不用传统的build命令了，改用generate。

至于为什么不直接用传统的`pnpm g`这种更简短的命令，单纯是我个人觉得这样很cool，哎嘿。

```bash
pnpm generate
```

