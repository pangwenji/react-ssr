# 使用官方的 Node.js 镜像
FROM node:14

# 设置工作目录
WORKDIR /usr/src/app

# 复制 package.json 和 package-lock.json
COPY package*.json ./

# 安装依赖
RUN npm install

# 复制项目文件到工作目录
COPY . .

# 设置环境变量
ENV NODE_ENV=production

# 应用程序监听的端口
EXPOSE 3000

# 启动应用程序
CMD ["npm", "start"]