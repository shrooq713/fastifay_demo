# Fastify_demo

## Introduction

Fastify_demo is a demonstration project showcasing the capabilities and features of Fastify, a web framework highly focused on providing the best developer experience with the least overhead and a powerful plugin architecture.


## Get Started

To get started with Fastify, follow these steps:

**Initialize npm project**:


    npm init


**Install fastify**:

    
    npm i -s fastify
   
## What is ESM?

ESM stands for ECMAScript Modules. It's a feature in JavaScript that allows you to use native modules without the need for a module bundler like CommonJS (Node.js) or RequireJS (browser). Fastify has support for ESM, meaning you can use ECMAScript Modules directly in your Fastify application.

When you're using ESM in Fastify, you can import modules using the `import` statement instead of `require`.

**If you are using ECMAScript Modules (ESM) in your project, be sure to include**:

    
    {
    "type": "module"
    }
    

**Install fastify**:

    
    npm run start
    

**Install mysql using dokcer**:
    
    docker pull mysql
    docker run --name mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=admin -d mysql:latest

**Execute a bash shell within the some-mysql container**:

    docker exec -it mysql bash


**Connect to the MySQL server**:
  
    mysql -u root -p

**Create a database and table**:
  
    CREATE DATABASE mydatabase;
    USE mydatabase;
    CREATE TABLE user(user_id INT PRIMARY KEY AUTO_INCREMENT, name VARCHAR(50) NOT NULL, email VARCHAR(255) NOT NULL);
    INSERT INTO user (name,email) VALUES ('shrooq','sh@gmail.com'),('Saleh', 's@gmail.com');

    
## SingleStore 
a database to transact, analyze and contextualize data in real time.

**Install SingleStore using dokcer**:
    
    docker run -d --name singlestoredb-dev -e SINGLESTORE_LICENSE="YOUR SINGLESTORE LICENSE" -e ROOT_PASSWORD="YOUR SINGLESTORE ROOT PASSWORD" \-p 3306:3306 -p 8080:8080 -p 9000:9000 ghcr.io/singlestore-labs/singlestoredb-dev:latest

SingleStore Studio is a convenient way to manage SingleStoreDB and run queries via a browser based UI. Studio runs by default on port 8080 in the container. Access studio at [http://localhost:8080](http://localhost:8080/).

When opening Studio you will see a login screen. Use the username `root` and the `ROOT_PASSWORD` you set when starting the container.
