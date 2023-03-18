#install dependencies when needed
FROM node:18-alpine
WORKDIR /
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production
COPY . .
RUN npm run build

CMD ["npm", "start"]