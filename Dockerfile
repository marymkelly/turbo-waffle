#install dependencies when needed
FROM node AS deps
WORKDIR /
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install
RUN npm run build

CMD ["npm", "start"]