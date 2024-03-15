FROM node:19-alpine
EXPOSE 3003
WORKDIR "/app"
COPY package.json .
RUN npm install 
COPY . .
CMD ["npm", "start"]