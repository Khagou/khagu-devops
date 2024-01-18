FROM node:latest 

RUN apt-get update -y

COPY . .

EXPOSE 7000

RUN npm install

CMD [ "npm", "run", "start" ]