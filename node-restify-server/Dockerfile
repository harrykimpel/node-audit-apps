FROM node:18
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
ENV NEW_RELIC_APP_NAME=node-restify-server
ENV NEW_RELIC_LICENSE_KEY=NEW_RELIC_LICENSE_KEY
CMD ["node", "server.js"]
