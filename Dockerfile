FROM node:lts-slim

WORKDIR /app

COPY . .

RUN apt-get -y update && apt-get -y install openssl
RUN npm i

CMD ["tail", "-f", "/dev/null"]
