FROM nginx:alpine

MAINTAINER Mike Dunhem

# Copy custom nginx config
COPY ./docker/nginx.conf /etc/nginx/nginx.conf
COPY ./dist/* /usr/share/nginx/html

EXPOSE 80

ENTRYPOINT ["nginx"]
CMD ["-g", "daemon off;"]
