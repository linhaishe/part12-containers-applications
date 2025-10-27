# ==========================
# 构建阶段
# ==========================
FROM node:20 AS build-stage
WORKDIR /usr/src/app

# 定义可传入的参数
ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL

COPY . .
RUN npm ci

RUN npm run build

# ==========================
# 测试阶段
# ==========================
FROM node:20 AS test-stage
WORKDIR /usr/src/app

# 拷贝 build-stage 的文件和 node_modules
COPY --from=build-stage /usr/src/app /usr/src/app

# 设置 CI 环境，保证 Vitest 等测试工具在非交互环境下正确退出
ENV CI=true

# 运行测试，如果失败，构建会失败
RUN npm run test

# ==========================
# 生产阶段
# ==========================
FROM nginx:1.25-alpine AS production
WORKDIR /usr/share/nginx/html

# 只拷贝 build-stage 的 dist 文件
COPY --from=build-stage /usr/src/app/dist .

# 自定义 Nginx 配置
COPY nginx.conf /etc/nginx/conf.d/default.conf
