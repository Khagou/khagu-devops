FROM node:latest-arm

RUN apt-get update -y

COPY . .

EXPOSE 7000

RUN npm ci

CMD [ "npm", "run", "start" ]