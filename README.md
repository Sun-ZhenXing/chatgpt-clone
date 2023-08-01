# Nuxt3 ChatGPT

## 1. 项目介绍

本项目是一个基于 Nuxt3 的聊天机器人示例。

**TODO**:

- [ ] 完善模型，完善接口内容
- [ ] 提供登录、注册、修改密码等功能
- [ ] 优化组件结构，加快页面加载速度
- [ ] 优化 UI，优化代码结构和注释
- [ ] 完善文档，提供英文 README

快速体验：

```bash
git clone https://github.com/Sun-ZhenXing/chatgpt-clone.git
docker-compose up -d
```

打开 <http://localhost:3000> 即可体验。

## 2. 环境要求

需要安装 `pnpm` 8+，且要求 Node.js >= 16，安装方法：

```bash
npm i -g pnpm
```

或者在启用 `corepack` 时使用 `corepack` 安装最新版本：

```bash
corepack prepare pnpm@latest --activate
```

安装依赖：

```bash
pnpm i
```

升级全部依赖项目：

```bash
pnpm up
```

删除不需要的依赖：

```bash
pnpm store prune
```

## 3. 开发和部署

开发：

```bash
pnpm dev
```

构建：

```bash
pnpm build
```

静态构建：

```bash
pnpm generate
```

Docker Compose 部署：

```bash
docker-compose up -d
```

重新部署：

```bash
docker-compose down
docker builder prune -a -f
docker-compose up -d
```
