FROM redwoodjs:app
WORKDIR /app
RUN yarn rw build api

FROM node:12-alpine AS runtime-api
WORKDIR /api
EXPOSE 8911

COPY --from=0 /app/api/dist .
COPY --from=0 /app/api/package.json .
COPY --from=0 /app/node_modules/.prisma ./node_modules/.prisma

RUN yarn add @redwoodjs/api-server @babel/runtime-corejs3 && \
    NODE_ENV=production yarn api-server --port 8911 --functions ./functions/
