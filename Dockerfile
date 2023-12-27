# build stage
FROM node:16-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install --no-optional
COPY . /app
RUN npm run build-prod

# production stage
FROM nginx:1.22-alpine
WORKDIR /app
COPY --from=build-stage /app/dist /app
COPY nginx/nginx.conf /etc/nginx/nginx.conf
EXPOSE 8080