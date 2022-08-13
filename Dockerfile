# Clone node
From node:current

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Bundle app source and install dependencies
COPY . /usr/src/app
RUN npm install

EXPOSE 8080

CMD ["npm", "run", "dev"]