FROM node:latest AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY app.js .

FROM gcr.io/distroless/nodejs

COPY --from=build /app /

EXPOSE 8080

CMD ["app.js"]