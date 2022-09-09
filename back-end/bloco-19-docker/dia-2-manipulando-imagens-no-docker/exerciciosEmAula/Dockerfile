FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD npm start

# COPY . .   //// COPIA TUDO O QUE TEM DENTRO DA PASTA PARA A PASTA WORKDIR