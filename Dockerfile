FROM node:lts-slim

WORKDIR /app
RUN apt-get -y update && apt-get -y install openssl

COPY . .
RUN chown -R node:node /app

USER node
RUN npm i

CMD ["tail", "-f", "/dev/null"]
