This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

"dev": "concurrently \"next dev\" \"node server.js\"",
"build": "next build",
"start": " NODE_ENV=production node server.js",
"lint": "next lint",
"format": "prettier --write ."

    1、npx next dev     启动在开发环境
    2、npx next  build  --profile 打包    使用--profile 前提首要是 浏览器要装有 React 插件 （React Developer Tools） 主要
    是看 react 组建在浏览器渲染性能分析

## Deploy on Vercel

5. 构建与运行
   构建镜像：
   bash
   复制代码
   docker build -t my-node-app .
   这条命令将当前目录下的 Dockerfile 进行构建，并命名镜像为 my-node-app。

运行容器：
bash
复制代码
docker run -p 3000:3000 my-node-app
这条命令运行容器，并将容器的 3000 端口映射到宿主机的 3000 端口。

6. 多阶段构建
   如果你的应用需要进行构建，并且不希望将构建工具和依赖带入最终的镜像中，可以使用多阶段构建：

dockerfile
复制代码

# 第一阶段：构建阶段

FROM node:14 AS builder

WORKDIR /usr/src/app
COPY package\*.json ./
RUN npm install
COPY . .
RUN npm run build

# 第二阶段：生产镜像

FROM nginx:alpine

COPY --from=builder /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
