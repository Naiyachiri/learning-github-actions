# build environment
FROM node:16.14.0-alpine as build
WORKDIR /learning-github-actions
ENV PATH /learning-github-actions/node_modules/.bin:$PATH
COPY package.json ./
COPY yarn.lock ./
# yarn equivalent of npm ci https://docs.npmjs.com/cli/v8/commands/npm-ci
RUN yarn install --frozen-lockfile
RUN yarn global add react-scripts@3.4.1 --silent
COPY . ./
RUN yarn run build

# production environment
FROM nginx:stable-alpine
COPY --from=build /learning-github-actions/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]