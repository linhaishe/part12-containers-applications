# todo-frontend/dev.Dockerfile
FROM node:20-alpine

WORKDIR /usr/src/app

# 先复制 package 文件并安装依赖
COPY . .

# Change npm ci to npm install since we are going to be in development mode
RUN npm install

# npm run dev is the command to start the application in development mode
CMD ["npm", "run", "dev", "--", "--host"]