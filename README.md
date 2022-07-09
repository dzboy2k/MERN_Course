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

## 8 - Create Backend API Routes & Schemas

## 9 - Enabling CORS & Why Do We Need It?
```
npm install cors
```

## 10 - Product, Categories Model & Schema

## 11 - Add and Delete Categories
```
http://localhost:3000/api/v1/categories POST
{
  "name": "health",
  "icon": "icon-health",
  "color": "#050505"
}
{
  "name": "computers",
  "icon": "icon-computer",
  "color": "#444"
}
{
  "name": "computers11",
  "icon": "icon-computer",
  "color": "#444"
}

http://localhost:3000/api/v1/categories/62c783080bd6bf2640131574 DELETE
http://localhost:3000/api/v1/categories GET
```

## 12 - Get Categories and Category Details
```
http://localhost:3000/api/v1/categories POST
{
  "name": "computers11",
  "icon": "icon-computer",
  "color": "#444"
}
{
  "name": "health",
  "icon": "icon-health",
  "color": "#444"
}
http://localhost:3000/api/v1/categories GET
http://localhost:3000/api/v1/categories/62c832e16adb0c3d617e8db7 GET
```

## 13 - Update Category
```
http://localhost:3000/api/v1/categories/62c832ba6adb0c3d617e8db5 PUT
{
  "name": "Electronics",
  "icon": "icon-electronics",
  "color": "#555"
}
{
  "name": "beuty",
  "icon": "icon-beuty",
  "color": "#555"
}
```

## 14 - Post a New Product REST API
```
http://localhost:3000/api/v1/products POST
{
  "name": "product 1",
  "description": "product 1 description",
  "richDescription": "product 1 richDescription",
  "image": "product1/image.jpg",
  "brand": "product 1 brand",
  "price": 25,
  "category": "62c832e16adb0c3d617e8db7",
  "countInStock": 10,
  "rating": 4,
  "numReviews": 22,
  "isFeatured": true
}
```

## 15 - Get a Product & List of Products REST API

## 16 - Show Category details in the Product - Populate
```
http://localhost:3000/api/v1/products/62c8ede420b142ab5c93dd59 GET
```

## 17 - Update a Product REST API
```
http://localhost:3000/api/v1/products/62c8ede420b142ab5c93dd59 PUT
{
  "name": "product 1 new",
  "description": "product 1 description new",
  "richDescription": "product 1 richDescription",
  "image": "product1/image.jpg",
  "brand": "product 1 brand",
  "price": 37,
  "category": "62c832e16adb0c3d617e8db7",
  "countInStock": 10,
  "rating": 4,
  "numReviews": 22,
  "isFeatured": true
}
```

## 18 - Delete a Product REST API and Validate Id

## 19 - Get Featured Products REST API

## 20 - Filtering and Getting Products by Category
```
http://localhost:3000/api/v1/products?categories=62c832e16adb0c3d617e8db7,62c832ba6adb0c3d617e8db5
```

## 21 - Changing "_id" key to "id" - more frontend friendly
