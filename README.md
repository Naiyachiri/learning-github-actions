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

### Cleaning up workflow runs

https://stackoverflow.com/questions/57927115/anyone-know-a-way-to-delete-a-workflow-from-github-actions#:~:text=To%20do%20this%2C%20navigate%20to,for%20each%20workflow%20run%20individually.


Replace GH_USERNAME and REPO_NAME with desired user/repo
```
user=naiyachiri repo=learning-github-actions; gh api repos/$user/$repo/actions/runs \
--paginate -q '.workflow_runs[] | select(.head_branch != "main") | "\(.id)"' | \
xargs -n1 -I % gh api repos/$user/$repo/actions/runs/% -X DELETE
```

workflow specific deletion of runs
```
export OWNER="naiyachiri"
export REPOSITORY="learning-github-actions"
export WORKFLOW="My Workflow"

gh api -X GET /repos/$OWNER/$REPOSITORY/actions/runs --paginate \
  | jq '.workflow_runs[] | select(.name == '\"$WORKFLOW\"') | .id' \
  | xargs -I{} gh api -X DELETE /repos/$OWNER/$REPOSITORY/actions/runs/{}
```