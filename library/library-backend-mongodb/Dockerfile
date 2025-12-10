# 使用 Node.js 运行环境
FROM node:20

WORKDIR /usr/src/app

# 只复制依赖声明
COPY package*.json ./

# 在 Linux 环境重新安装依赖
RUN npm ci

# 再复制代码
COPY . .

# 暴露端口
EXPOSE 4000

CMD ["npm", "start"]
