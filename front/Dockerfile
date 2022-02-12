FROM node:lts-alpine as builder

WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install && yarn cache clean
COPY . .

RUN yarn build

# 빌드 파일만 쏙 빼가기

FROM node:lts-alpine

WORKDIR /app
COPY --from=builder /app/.nuxt .

ENV HOST 0.0.0.0
EXPOSE 3000

CMD [ "yarn", "start" ]