FROM node:latest
WORKDIR ./app

COPY package.json ./
RUN npm install
COPY ./src .
EXPOSE 8080

CMD ["node", "src/server.mjs"]