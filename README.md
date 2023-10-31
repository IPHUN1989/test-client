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

# Usage

**Clone with the following command line:**

```bash
# Clone this repository
git clone https://github.com/IPHUN1989/test-client.git

```

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

### Option 1: Without an IDE

- **Create a database called product for testing the application**
- **Navigate to {local_folder_of_cloned_project/backend/src/resources/db/migration}**
- **Open "init-schema.sql" and copy the query**
- **Open the created test database with a query tool and run the copied query to initialzie the database**
- **Run the following command lines**

```bash
# Navigate to the local folder
cd {local_folder_of_cloned_project/backend}

# Build the project to a jar file
mvn clean install

# Run the applicaiton
java -jar -Dspring.datasource.url=jdbc:postgresql://localhost:5432/${database} -Dlogging.file.path=${log_folder_path} -Dspring.datasource.password=${password} -Dapplication.secret=${secret_key} -Dapplication.username=${username} backend-0.0.1-SNAPSHOT.jar
```

### Option 2: With an IDE

- **Change the required local enviromental variables values to your system settings (e.g. "DATABASE", "PASSWORD", "SECRET_KEY", "SQL_PORT", "SQL_SERVER", "USERNAME")**
- **Run the BackendApplication**
- **Open the created test database for products and import the database from {local_folder_of_cloned_project/db/product.sql}**


##  Running with Docker

- Create a .env file in the ${local_folder_of_cloned_project}
- Fill out the followings and copy them into the .env file
```env

SQL_PORT=${your sql port}
DATABASE=${your database name}
LOG_FOLDER=${your log folder path}
SECRET_KEY=${your secret key}
```

```bash
# Navigate to the local folder
docker-compose up
```
- Visit the dockerized website on localhost:3456
