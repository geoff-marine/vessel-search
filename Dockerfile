FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf

COPY dist/vessel-search /usr/share/nginx/html
WORKDIR /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
