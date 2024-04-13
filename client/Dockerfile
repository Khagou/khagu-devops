FROM nginx:latest

RUN apt-get update -y

COPY ./build/ /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]