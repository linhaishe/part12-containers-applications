# ==========================
# 构建阶段：使用 Node 构建前端
# ==========================
FROM node:20 AS build-stage
WORKDIR /usr/src/app

# 可传入 API 地址 (来自 docker-compose.yml)
ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL

# 拷贝代码并安装依赖
COPY . .
RUN npm ci

# 构建生产包
RUN npm run build

# ==========================
# 生产阶段：使用 Nginx 提供静态文件
# ==========================
FROM nginx:1.25-alpine AS production
WORKDIR /usr/share/nginx/html

# 拷贝打包后的静态文件
COPY --from=build-stage /usr/src/app/dist .

# ✅ 不需要再有任何 nginx.conf（由外层 nginx 管理代理）
# ✅ 仅暴露 80 端口用于静态文件服务
EXPOSE 80

# 使用默认启动命令
CMD ["nginx", "-g", "daemon off;"]
