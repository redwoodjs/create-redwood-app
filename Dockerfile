# Install the things required to build
FROM node:12-alpine AS build-image
WORKDIR /app
COPY . ./
RUN apk add --no-cache git && \
    yarn install