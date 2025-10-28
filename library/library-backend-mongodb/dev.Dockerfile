# ==========================
# 开发阶段 Dockerfile
# ==========================
FROM node:20-alpine

# 设置工作目录
WORKDIR /usr/src/app

# 先复制 package.json 和 package-lock.json，安装依赖
COPY package*.json ./

# 安装依赖，包括 devDependencies
RUN npm ci

# 拷贝项目源代码
COPY . .

# 设置开发命令，使用 nodemon + tsx 运行
CMD ["npx", "nodemon", "--exec", "tsx", "index.ts"]
