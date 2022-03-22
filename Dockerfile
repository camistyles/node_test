FROM node:16.2.0

WORKDIR /app

COPY package.json .
COPY package-lock.json .
RUN npm install --silent

COPY . .
CMD [ "node", "cmd/index.js" ]