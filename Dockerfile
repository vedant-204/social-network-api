FROM debian:latest
WORKDIR /app
RUN apt-get update && apt-get install nodejs -y
RUN apt-get install npm -y
COPY . .
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]

