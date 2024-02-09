FROM node:latest 

RUN apt-get update && apt-get install -y

COPY . .

EXPOSE 7000

RUN npm ci

CMD [ "npm", "run", "start" ]