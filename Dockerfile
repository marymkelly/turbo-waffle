#install dependencies when needed
FROM node AS deps
RUN npm install
RUN npm run build

CMD ["npm", "start"]