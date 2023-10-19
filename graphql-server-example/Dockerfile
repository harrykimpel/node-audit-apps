FROM node:18
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 4000
ENV NEW_RELIC_APP_NAME=node-apollo-server
ENV NEW_RELIC_LICENSE_KEY=NEW_RELIC_LICENSE_KEY
CMD ["npm", "start"]
