# build project
FROM node:12.19-alpine AS build
WORKDIR /frontend
COPY . /frontend
RUN npm ci
RUN npm install tsc -g
RUN npm run-script build

# create server image
FROM nginx:1.19.3-alpine AS create_server
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /frontend/build /usr/share/nginx/html

CMD nginx -g "daemon off;"