FROM nginx:latest

RUN apt-get update \
    && apt-get install -y certbot python3-certbot-nginx \
    && echo 'location ~ /.well-known/acme-challenge/ { allow all; root /var/www/html; }' > /etc/nginx/conf.d/default.conf

COPY ./build/ /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]