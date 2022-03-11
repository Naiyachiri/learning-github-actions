# learning-github-actions
Learning github actions to create a basic dev ops pipeline

### project configuration setup

- prevent direct pushes to main
- include a status check to protect main and include administrators

### Running Dockerized React Application

https://mherman.org/blog/dockerizing-a-react-app/

- create related Dockerfile
- add related .dockerignore
- docker run -it --rm -v ${PWD}:/app -v /app/node_modules -p 3001:3000 -e CHOKIDAR_USEPOLLING=true sample:dev
- create docker-compose.yml to simplify the start up command


### Dockerfiles

- Dockerfile is intended for slug/prod/ci testing
- Dockerfile.dev is local testing and maps in local node_modules and etc for speed optimizations

run: `docker run -p 3000:80 [repository:tag]` to expose the application at http://localhost:3000