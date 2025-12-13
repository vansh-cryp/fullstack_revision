# build stage

FROM node:22-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Production stage

FROM node:22-alpine 

WORKDIR /app

RUN npm install -g serve

ENV PATH = "/user/local/bin:$PATH"

COPY --from=build /app/dist ./dist

EXPOSE 3000

#serve listen on port 3000 as we have converted the react files to html css js 
CMD ["serve","-s","dist","-l","3000"]
