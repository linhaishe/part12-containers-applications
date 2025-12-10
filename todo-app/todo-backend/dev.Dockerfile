FROM node:20

WORKDIR /usr/src/app

# 先复制 package.json / package-lock.json
COPY package*.json ./

# 安装依赖
RUN npm install

# 默认命令用 nodemon 启动你的 bin/www
CMD ["npm", "run", "dev"]
