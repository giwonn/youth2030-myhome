FROM node:lts-alpine as builder

WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install && yarn cache clean
COPY . .

RUN yarn build

EXPOSE 3000

CMD [ "yarn", "start" ]