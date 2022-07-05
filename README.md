## 1 - Tool and Environment

CTRL + J: Open In Terminal
```
  npm version
  mkdir MERN_Course
  npm install -g expo-cli
  clear
  expo init --npm
  easy-shop
  blank

  cd easy-shop
  npm start

  Android SDK Platform 31
  Intel x86 Atom_64 System Image
  Google APIs Intel x86 Atom System Image
  Android SDK Build-Tools 31.0.0
  %ANDROID_HOME%\platform-tools

  Android Virtual Device -> Pixel 2

  Visual Studio Code
    bracket pair colorizer
    es7 -> ES7+ React/Redux/React-Native snippets
    prettier -> Prettier - Code formatter
```

## 2 - Configure MongoDB Atlas
```
  New Project:
    Name Your Project: E-shop
    -> Create Project
  E-shop:
    Build a Database -> Shared -> Create
      Cloud Provider & Region: AWS, N. Virginia (us-east-1)
    => Create Cluster
```

## 3 - Creating Backend Server
```
  mkdir backend
  npm init
    package name: eshop
    description: backend of the eshop
    entry point: (index.js) app.js

  npm install nodemon
  package.json
    "scripts": {
      "start": "nodemon app.js"
    }
  npm start
  npm install express
```

## 4 - Reading Environment Variables
```
  npm install dotenv
```

## 5 - Create First API Call & Parsing Json Data 
```
POSTMAN
  GET http://localhost:3000/api/v1/products
  POST http://localhost:3000/api/v1/products
    Body - raw - JSON:
    {
      "id": 1,
      "name": "hair dresses",
      "image": "some_url"
    }

npm install body-parser
```

## 6 - Logging API Requests
```
npm install morgan
npm install mongoose

https://cloud.mongodb.com/
  Database Access => Add New Database User
    shop-user
    1234567Rr
  Connect => Connect your application
  Browse Collections => Add My Own Data:
    Database name: eshop-database
    Collection name: products
    => Create
``` 

## 7 - Read/Write Data to Database Using API
```
mongoose schema

http://localhost:3000/api/v1/products POST
  {
    "id": 1,
    "name": "hair dresses 2",
    "image": "some_url",
    "countInStock": 500
  }
```
