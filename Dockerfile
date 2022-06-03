FROM node:18-alpine as base

RUN mkdir -p /app
WORKDIR /app

COPY . .

EXPOSE 3000

RUN npm install
RUN npm install serve --global

CMD npm run build && serve -s build
