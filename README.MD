# Build Your Own API Using NodeJS and ExpressJS

## Description

This project is a simple API built using Node.js and Express.js. It demonstrates how to set up a Node.js project, install necessary dependencies, and create a basic server with environment configuration.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Deployment](#deployment)

## Installation

Follow these steps to set up the project on your local machine:

1. Initialize the project:
    ```bash
    npm init -y
    ```

2. Install Express.js:
    ```bash
    npm i express
    ```

3. Install development dependencies:
    ```bash
    npm i --save-dev typescript nodemon @types/node @types/express
    ```

4. Install dotenv package to load environment variables:
    ```bash
    npm i dotenv
    ```

5. Create a `.env` file to store your environment variables.

## Usage

To start the server, use the following command:

```bash
npm start
```

## Deployment

This project is deployed on Railway. Follow these steps to deploy your project:

1. Sign up for a Railway account and create a new project.
2. Link your GitHub repository to Railway.
3. Add the necessary environment variables in the Railway dashboard.
4. Railway will automatically build and deploy your project from your repository.
