FROM node:alpine as base
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm ci --production
COPY . .
EXPOSE 3000
CMD [ "npm", "run", "start" ]
