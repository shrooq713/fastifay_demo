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
    
**run fastify**:
    
    npm run start
 
## SingleStore 
A database to transact, analyze and contextualize data in real time.
It is accessible through standard SQL drivers.

**inistall sql**:
    
    npm i -s @fastify/mysql

### Table types:

1. Rowstore : Stored in RAM. Good for high concurrency and OLTP.
2. Column store: Rows stored in disk. Good for large tables and analytics.
3. Temporary: Visible only to client session and disappear when client disconnects. Rowstore only.
4. Reference: Copied to every node in cluster. use more space but accelerate joins. Can be rowstore or columnstore.

### Shard key:

Determine where singleStore stores a given row.
when the client inser new values, **for example**:
    
    insert into A Values (1,2,3);

where 2 is the shard key.

This SQL statement submits to aggregator. then the aggregator performs a calculation on the shard key which is here is 2. the result of that calculation is where the row is stored

Rows with the same shard key are stored in the same partition, even if the rows are in different tables.

### Data skew :

happens when a database partition has an unbalanced amount of data due to bad shard key.

**Install SingleStore using dokcer**:
    
    docker run -d --name singlestoredb-dev -e SINGLESTORE_LICENSE="YOUR SINGLESTORE LICENSE" -e ROOT_PASSWORD="YOUR SINGLESTORE ROOT PASSWORD" \-p 3306:3306 -p 8080:8080 -p 9000:9000 ghcr.io/singlestore-labs/singlestoredb-dev:latest

SingleStore Studio is a convenient way to manage SingleStoreDB and run queries via a browser based UI. Studio runs by default on port 8080 in the container. Access studio at [http://localhost:8080](http://localhost:8080/).

When opening Studio you will see a login screen. Use the username `root` and the `ROOT_PASSWORD` you set when starting the container.

**Create a database and table**:
  
    CREATE DATABASE mydatabase;
    USE mydatabase;
    CREATE TABLE user(user_id INT PRIMARY KEY AUTO_INCREMENT, name VARCHAR(50) NOT NULL, email VARCHAR(255) NOT NULL);
    INSERT INTO user (name,email) VALUES ('shrooq','sh@gmail.com'),('Saleh', 's@gmail.com');
    
## minIO 
Provides robust object storage capabilities specifically designed for storing files.

**Install minIO using dokcer**:
    
    docker pull quay.io/minio/minio:latest
    docker run -p 9000:9000 -d -p 9001:9001 -e "MINIO_ROOT_USER=user" -e "MINIO_ROOT_PASSWORD=your_password" quay.io/minio/minio server /data --console-address ":9001"


