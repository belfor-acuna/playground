## How does it work?
This repository contains two main directories, each corresponding to a different backend framework:

- **expressPlayground**: Contains the Express.js framework source code.
- **nestPlayground**: Contains the NestJS framework source code.

Each directory has:

- A Dockerfile to build the container for the respective framework.
- Framework-specific files (e.g., package.json and any necessary source files).

The project structure is as follows:
```
/Playground
  ├── /expressPlayground
  │   ├── Dockerfile
  │   ├── /src
  │   │   └── index.js
  │   └── package.json
  ├── /nestPlayground
  │   ├── Dockerfile
  │   ├── /src
  │   │   └── main.ts
  │   └── package.json
  ├── kong.yml
  ├── compose.yml
  ├── .env
  └── README.md

```
## Docker Compose & Kong API Gateway
In the root directory, we have:

- **kong.yml**: The Kong API Gateway configuration file.

- **compose.yml**: The Docker Compose configuration file, which manages the containers and services.

First, the docker compose file is responsible for the following:

1. Building the Docker containers for the two frameworks (Express.js and NestJS).

    - It specifies the context for the Docker build, which includes the source code and Dockerfile for each framework.
    - The Dockerfile installs dependencies and runs the framework inside the container.

2. Starting the Kong API Gateway container.

    - The kong.yml config file is used to configure Kong to route traffic to the correct backend containers.
    - Additional configurations for Kong (like logging and access settings) are included in the environment section, following the official [Kong documentation](https://docs.konghq.com/gateway/latest/get-started/).

3. Creating a Docker network for the containers to communicate with each other.

    - This network is managed by the Kong API Gateway.

# How Kong routes traffic
Kong is responsible for routing requests to the appropriate service (i.e., the backend containers). In the kong.yml config file, you define services and routes:

- **Services** represent the backend containers that Kong will route traffic to.

- **Routes**  define the specific endpoints that Kong will expose and direct traffic to.

For example, in the case of the Express.js framework, there is a route /testexpress. The Kong configuration includes a service pointing to the expresscontainer, with a route identifier like express-test. The path /testexpress is mapped to this service, so any request to http://<kong_gateway>/testexpress will be routed to the expresscontainer.


## Setup

Follow the next steps if you want to use this!

1. Clone the repository
    ```
    git clone https://github.com/belfor-acuna/playground
    ```
2. Select the proyect directory
    ```
    cd playground
    ```
3. Initialize git flow
    ```
    git flow init
    ```
4. Make sure you are in the branch "develop" using
    ```
    git branch
    ```
5. Make sure to have docker engine and docker compose plugin in your system, if you don't, you can check the documentation at https://docs.docker.com/engine/

6. Create a .env in the root directory that includes AT LEAST the express port variable(This is used for the express API in compose.yml file)
    ```
    EXPRESS_PORT = 3001 (Or whichever you want)
    ```
7. Build the containers using docker compose
    ```
    docker compose up -d --build
    ```
8. Try it! to test an express route:
    ```
    curl http://localhost:8000/testexpress
    ```
9. To test a nestJS route:
    ```
    curl http://localhost:8000/testnest
    ```

## Contact

Feel free to contact me anytime! Whether you have any questions or advice to share, I'm always open to hearing from you. Don’t hesitate to reach out!

You can reach me via email at: **b.acuna.cas@gmail.com** or through:  
- [LinkedIn](https://www.linkedin.com/in/belfor-acuna)
- [My portfolio](https://belfor-acuna-portfolio.onrender.com)
