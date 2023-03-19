FROM node:18
WORKDIR /
COPY package*.json ./
RUN npm install --only=production
COPY . ./
CMD [ "npm", "start" ]