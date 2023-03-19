FROM node:16
WORKDIR /
COPY package*.json ./
RUN npm install --only=production
COPY . ./
RUN firebase experiments:enable webframeworks
CMD [ "npm", "start" ]