FROM node:13

WORKDIR /usr/src

COPY package*.json ./

RUN yarn install
COPY . .

CMD [ "yarn", "test" ]