FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html
COPY dist/ . /usr/share/nginx/html/
CMD ["nginx", "-g", "daemon off;"]
