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

    
