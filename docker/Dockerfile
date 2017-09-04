FROM nginx:alpine

MAINTAINER Mike Dunhem

# Copy custom nginx config
COPY ./docker/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

ENTRYPOINT ["nginx"]
CMD ["-g", "daemon off;"]
