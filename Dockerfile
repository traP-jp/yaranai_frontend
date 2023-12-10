FROM node:20.2-alpine

WORKDIR /app

COPY . .

RUN npm ci && npm run build