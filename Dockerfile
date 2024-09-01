FROM node as base


# start from a base image, in this case it's nodejs
FROM base as development

# create folder
WORKDIR /app

# now move package.json to the folder
# COPY package.json /app/ = .(they both are the same)
COPY package.json .

ARG NODE_ENV

RUN npm install

COPY . .

ENV PORT=3000 
EXPOSE $PORT

CMD [ "npm", "run", "dev" ]

#  --------------
FROM base as production

WORKDIR /app

COPY package.json .

ARG NODE_ENV

RUN npm install --only=production

COPY . .

ENV PORT=3000 
EXPOSE $PORT

CMD [ "npm", "start" ]