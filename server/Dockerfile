FROM node:latest 

RUN apt-get update && apt-get install -y

COPY . .

EXPOSE 7000

RUN npm install -g npm-check-updates \
    ncu -u \
    npm ci


CMD [ "npm", "run", "start" ]