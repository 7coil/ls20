FROM node:alpine
WORKDIR /app
COPY . .
RUN yarn
RUN yarn build
CMD node dist/
