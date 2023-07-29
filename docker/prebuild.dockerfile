# Builder image
FROM node:18.17.0-bullseye as builder

WORKDIR /app

COPY . ./

ENV NODE_OPTIONS=--max-old-space-size=4096 \
    TZ=Asia/Shanghai \
    LANG=C.UTF-8 \
    LANGUAGE=C.UTF-8 \
    LC_ALL=C.UTF-8

RUN npm -v \
    && npm config set registry https://registry.npmmirror.com/ \
    && npm install -g pnpm \
    && pnpm -v \
    && pnpm config set registry https://registry.npmmirror.com/ \
    && pnpm install \
    && pnpm build

# Store files
FROM scratch

WORKDIR /app

COPY --from=builder /app/.output ./dist
