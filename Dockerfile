FROM node:17.8.0-alpine as base

RUN mkdir -p /app
WORKDIR /app

COPY . .

EXPOSE 3000

RUN npm install
RUN npm run build
RUN npm install serve --global

CMD ["serve", "-s", "build"]
