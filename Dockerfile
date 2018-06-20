FROM node:8
COPY package.json .
RUN npm install
COPY index.js .
EXPOSE 3000
CMD ["npm","start"]
