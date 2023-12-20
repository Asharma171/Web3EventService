FROM node:20.10.0-alpine3.17
# Create app directory
WORKDIR /
COPY package.json .
COPY .env .env
RUN npm install
# Bundle app source
COPY . .
EXPOSE 4000
# Define the command to start your application
CMD [ "npm", "run", "start" ]