FROM node:20-alpine AS base

FROM base AS builder

WORKDIR /app

# COPY .env.example .env
COPY . .


# 设置 npm 的源为国内的源
RUN npm config set registry https://registry.npmmirror.com/

RUN npm i --verbose && \
    npm run build


FROM base AS runner

WORKDIR /app

ENV NODE_ENV production

RUN mkdir .next

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
# 复制 public 文件夹到最终镜像
COPY --from=builder /app/public ./public

EXPOSE 3000

CMD HOSTNAME="0.0.0.0" node server.js