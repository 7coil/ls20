FROM node:alpine
WORKDIR /app
COPY . .
RUN yarn
RUN yarn build:client
RUN yarn build:server
CMD node dist/server.js
