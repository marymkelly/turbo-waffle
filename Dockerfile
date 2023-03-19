FROM node:18
WORKDIR /
COPY package*.json ./
RUN npm install --only=production
COPY . ./
RUN firebase experiments:enable webframeworks
CMD [ "npm", "start" ]