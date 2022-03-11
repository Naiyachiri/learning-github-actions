# pull official base image
FROM node:16.14.0-alpine

# set working directory
WORKDIR /learning-github-actions

# add `/app/node_modules/.bin` to $PATH
ENV PATH /learning-github-actions/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY yarn.lock ./
RUN yarn install

# add app
COPY . ./

# start app
CMD ["yarn", "start"]