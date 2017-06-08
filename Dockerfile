FROM node:8.0.0-alpine

RUN mkdir /app
WORKDIR /app

ADD ./package.json /app
RUN npm install

ADD ./src /app/src

# Default environmental values
ENV PORT=51234
ENV REDIS_HOST=redis

CMD npm run start