# 使用官方 Node.js 20 版本
FROM node:20-alpine

# 设置工作目录
WORKDIR /usr/src/app

# 先复制 package.json 和 package-lock.json（提高缓存效率）
COPY package*.json ./

# 安装依赖
RUN npm install

# 复制剩余源码（开发环境下这个复制主要是为了构建缓存，实际会被挂载覆盖）
COPY . .

# 默认启动命令
CMD ["npm", "run", "dev", "--", "--host"]
