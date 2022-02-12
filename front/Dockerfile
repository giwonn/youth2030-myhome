FROM node:lts-alpine as builder

WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install && yarn cache clean
COPY . .

RUN yarn build

# 빌드 파일만 쏙 빼가기

FROM nginx
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/public /etc/nginx/html
EXPOSE 8080