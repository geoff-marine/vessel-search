FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html
COPY dist/vessel-search .
CMD ["nginx", "-g", "daemon off;"]
