FROM node:current-slim

WORKDIR /usr/src/app
COPY package.json .
RUN npm install

EXPOSE 3000
CMD [ "npm", "start" ]

COPY . .
