FROM nginx:latest

RUN apt-get update \
    && apt-get install -y certbot python-certbot-nginx
    
COPY ./build/ /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]