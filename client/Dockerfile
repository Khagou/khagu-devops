FROM nginx:latest

RUN apt-get update \
    && apt-get install -y certbot python3-certbot-nginx 

RUN echo "server {" > /etc/nginx/conf.d/default.conf \
    && echo "    listen 80;" >> /etc/nginx/conf.d/default.conf \
    && echo "    location / {" >> /etc/nginx/conf.d/default.conf \
    && echo "        root /usr/share/nginx/html;" >> /etc/nginx/conf.d/default.conf \
    && echo "    }" >> /etc/nginx/conf.d/default.conf \
    && echo "    location ~ /.well-known/acme-challenge/ { allow all; root /usr/share/nginx/html; }" >> /etc/nginx/conf.d/default.conf \
    && echo "}" >> /etc/nginx/conf.d/default.conf

COPY ./build/ /usr/share/nginx/html

EXPOSE 80
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]