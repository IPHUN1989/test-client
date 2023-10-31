![GitHub repo size](https://img.shields.io/github/repo-size/IPHUN1989/test-client)
![GitHub language count](https://img.shields.io/github/languages/count/IPHUN1989/test-client)
![Static Badge](https://img.shields.io/badge/total%20number%20of%20tracked%20files-90-blue)
![GitHub contributors](https://img.shields.io/github/contributors/IPHUN1989/test-client)
![GitHub commit activity (branch)](https://img.shields.io/github/commit-activity/t/IPHUN1989/test-client?label=total%20commits)
![GitHub commit activity (branch)](https://img.shields.io/github/commit-activity/m/IPHUN1989/test-client?label=monthly%20commits)
![GitHub last commit (branch)](https://img.shields.io/github/last-commit/IPHUN1989/test-client/frontend-filter-solution)
![GitHub closed issues](https://img.shields.io/github/issues-closed/IPHUN1989/test-client)
![GitHub issues](https://img.shields.io/github/issues-raw/IPHUN1989/test-client)
![GitHub pull requests](https://img.shields.io/github/issues-pr/IPHUN1989/test-client)




# Test Client
**A simple full stack web application with the following technologies:**
- <img src="https://raw.githubusercontent.com/yurijserrano/Github-Profile-Readme-Logos/042e36c55d4d757621dedc4f03108213fbb57ec4/frameworks/react.svg" alt="drawing" width="30" align="center"/> *React* 
- <img src="https://raw.githubusercontent.com/yurijserrano/Github-Profile-Readme-Logos/042e36c55d4d757621dedc4f03108213fbb57ec4/programming%20languages/javascript.svg" alt="drawing" width="30" align="center"/> *JavaScript*
-  <img src="https://raw.githubusercontent.com/yurijserrano/Github-Profile-Readme-Logos/042e36c55d4d757621dedc4f03108213fbb57ec4/frameworks/spring.svg" alt="drawing" width="30" align="center"/> *Spring*
- <img src="https://raw.githubusercontent.com/yurijserrano/Github-Profile-Readme-Logos/042e36c55d4d757621dedc4f03108213fbb57ec4/programming%20languages/java.svg" alt="drawing" width="30" align="center"/> *Java* 
- <img src="https://raw.githubusercontent.com/yurijserrano/Github-Profile-Readme-Logos/042e36c55d4d757621dedc4f03108213fbb57ec4/databases/postgresql.svg" alt="drawing" width="30" align="center"/> *PostgreSQL*
- <img src="https://raw.githubusercontent.com/yurijserrano/Github-Profile-Readme-Logos/042e36c55d4d757621dedc4f03108213fbb57ec4/cloud/docker.svg" alt="drawing" width="30" align="center"/> *Docker*

# Background
**A simple web application where:**
- *The user can access the dummy database only if he/she logs in*
- *Jwt token based authentication*
- *Register themselves securely with hashed password*
- *Each columns can be filtered*
- *Multiple single filter options are available e.g. "consist", "contains", "starts with"*
- *Multi filtering option at the same is also available*
- *Dockerized version is available*

# Prerequisites
- <img src="https://upload.wikimedia.org/wikipedia/commons/5/52/Apache_Maven_logo.svg" alt="drawing" width="30" align="center"/> *Maven 3.6.3*
- <img src="https://raw.githubusercontent.com/yurijserrano/Github-Profile-Readme-Logos/042e36c55d4d757621dedc4f03108213fbb57ec4/frameworks/nodejs.svg" alt="drawing" width="30" align="center"/> *Node 19.8.1*
- <img src="https://raw.githubusercontent.com/yurijserrano/Github-Profile-Readme-Logos/042e36c55d4d757621dedc4f03108213fbb57ec4/programming%20languages/java.svg" alt="drawing" width="30" align="center"/> *Java 17.0.7*
- <img src="https://raw.githubusercontent.com/yurijserrano/Github-Profile-Readme-Logos/042e36c55d4d757621dedc4f03108213fbb57ec4/others/npm.svg" alt="drawing" width="30" align="center"/> *NPM 9.5.1*
- <img src="https://raw.githubusercontent.com/yurijserrano/Github-Profile-Readme-Logos/042e36c55d4d757621dedc4f03108213fbb57ec4/databases/postgresql.svg" alt="drawing" width="30" align="center"/> *PostgreSQL 12.16*
- <img src="https://raw.githubusercontent.com/yurijserrano/Github-Profile-Readme-Logos/042e36c55d4d757621dedc4f03108213fbb57ec4/others/git.svg" alt="drawing" width="30" align="center"/> *Git 2.30.2*

# Installation

## Frontend 

```bash
# Go to your local folder
cd {local_folder_of_cloned_project/frontend}

# Install dependencies
npm i

# Run application
npm run dev

# Visit localhost:5173

```

## Backend

- **Create a database called product for testing the application**
- **Use import.sql located in the db folder to populate the database**
- **Run the following command lines**

```bash
# Navigate to the local folder
cd {local_folder_of_cloned_project/backend}

# Build the project to a jar file
mvn clean install

# Run the applicaiton
java -jar -Dspring.datasource.url=jdbc:postgresql://<YOUR_SQL_SERVER><YOUR_SQL_PORT>/<YOUR_DATABASE> -Dspring.datasource.password=<YOUR_DB_PASSWORD> -Dapplication.secret=<YOUR_SECRET_KEY> -Dapplication.username=<YOUR_DB_USERNAME> ./target/backend-0.0.1-SNAPSHOT.jar
```

##  Running with Docker

```bash
# Navigate to the local folder
docker-compose up
```
- Visit the dockerized website on localhost:5173


# Usage

- **The database is initialized with 50 products but no users**
- **User cannot access the database without first login**
- **First create a user and login afterwards**
- **With the received JWT token the user can browse the products**
- **User can use single filtering options located at the left upper corner of the table**
- **User can use multiple filtering options at the same time located above the table**
- **User can sort by each column**
- **User can export rows of data by selecting them one by one or by selecting all results**
- **Saved results keep their sorting order**
- **It is possible to save resulsts to both pdf and csv file formats** 
