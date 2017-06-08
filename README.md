# Bookmart
Example project used as a base at the House workshops. With this backend you can add, delete and list strings with redis.

## Api

* GET `/bookmarks`
* POST `/bookmarks/:name` (body include the string to save)
* DELETE `/bookmarks/:name`

## Workshop 1. Docker

__Dockerfile__ - Used to build the docker image

__docker-compose.yml__ - Used to bind different containers together

### Commands

Some commands should be run inside your project folder.

* List running docker containers - `docker ps`
* List all docker containers - `docker ps -a`
* List docker images - `docker images`
* Run the docker containers & rebuild them - `docker-compose up --build`
* Run the docker containers in the background - `docker-compose up -d`
* Get logs when docker containers run in background - `docker-compose logs`
* Log in to container - `docker exec -it <CONTAINER_ID> sh`

### Handy sites

* [Docker](https://www.docker.com/)
* [Docker hub](https://hub.docker.com/)
* [Docker compose file](https://docs.docker.com/compose/compose-file/compose-file-v2/)
* [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop)

