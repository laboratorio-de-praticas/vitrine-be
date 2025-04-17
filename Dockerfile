FROM node:22.14.0-alpine3.21

WORKDIR /app


COPY package*.json ./


RUN npm install


COPY . .


FROM node:22.14.0-alpine3.21

WORKDIR /app


COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app .


ENV PORT=3001

EXPOSE $PORT


CMD ["npm", "start"]