FROM node:14.18.0-alpine3.14 AS development

WORKDIR /air_quality

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]

# Production stage
FROM node:14.18.0-alpine3.14 AS production

WORKDIR /air_quality

COPY package*.json ./

RUN npm install --only=production

COPY . .

CMD ["npm", "run", "start"]
