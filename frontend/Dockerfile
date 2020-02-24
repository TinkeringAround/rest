# Stage 1 - Build Static Files
FROM node:alpine as BUILD
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn install
COPY . ./
RUN yarn build

# Stage 2 - Bundle to App
FROM nginx:alpine
COPY --from=BUILD /usr/src/app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
