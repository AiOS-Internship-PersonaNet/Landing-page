FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .


# Your app binds to port 3000 so you'll use the EXPOSE instruction to have it mapped by the docker daemon
EXPOSE 3000



CMD ["npm", "start"]