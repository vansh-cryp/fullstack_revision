#define the type of modules you want
FROM node:22-alpine

WORKDIR /app

#this is used to copy the files from the current directory
COPY package*json ./

RUN npm install
#copy the modules in the node enviornment
COPY . . 
#this port is open to the world
EXPOSE 4000

#this is a command that is executed
CMD ["npm","start"]