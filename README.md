## 1 - Tools and Environment

### 1 - Installing nodejs

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

### 2 - Configure MongoDB Atlas
```
  New Project:
    Name Your Project: E-shop
    -> Create Project
  E-shop:
    Build a Database -> Shared -> Create
      Cloud Provider & Region: AWS, N. Virginia (us-east-1)
    => Create Cluster
```

## 2 - Starting with Backend

### 1 - Creating Backend Server with Express
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

### 2 - Reading Environment Variables
```
  npm install dotenv
```

### 3 - Create First API Call & Parsing Json Data 
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

### 4 - Logging API Requests
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

### 5 - Read/Write Data to Database Using API
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

### 6 - Create Backend API Routes & Schemas

### 7 - Enabling CORS & Why Do We Need It?
```
npm install cors
```

## 3 - Backend: Products & Categories

### 1 - Product, Categories Model & Schema

### 2 - Add and Delete Categories
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

### 3 - Get Categories and Category Details
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

### 4 - Update Category
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

### 5 - Post a New Product REST API
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

### 6 - Get a Product & List of Products REST API

### 7 - Show Category details in the Product - Populate
```
http://localhost:3000/api/v1/products/62c8ede420b142ab5c93dd59 GET
```

### 8 - Update a Product REST API
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

### 9 - Delete a Product REST API and Validate Id

### 10 - Get Featured Products REST API

### 11 - Filtering and Getting Products by Category
```
http://localhost:3000/api/v1/products?categories=62c832e16adb0c3d617e8db7,62c832ba6adb0c3d617e8db5
```

### 12 - Changing "_id" key to "id" - more frontend friendly

## 4 - Backend: Users & Authentication

### 1 - Post/Register a New User REST API
```
http://localhost:3000/api/v1/users POST
{
  "name": "James",
  "email": "james@email.com",
  "passwordHash": "123456",
  "phone": "+144411214",
  "isAdmin": true,
  "apartment": "Apartment 202",
  "zip": "15002",
  "city": "Newyork",
  "country": "USA"
}
{
  "name": "Tom",
  "email": "tom@email.com",
  "passwordHash": "123456",
  "phone": "+14441777",
  "isAdmin": true,
  "street": "Street 100",
  "apartment": "Apartment 202",
  "zip": "15002",
  "city": "Newyork",
  "country": "USA"
}
{
  "name": "Mike",
  "email": "mike@email.com",
  "passwordHash": "123456",
  "phone": "+144418888",
  "isAdmin": true,
  "street": "Street 5",
  "apartment": "Apartment 4",
  "zip": "15002",
  "city": "Prague",
  "country": "Czech Republic"
}
```

### 2 - Users Model & Schema

### 3 - Hashing the User Password
```
npm install bcryptjs
{
  "name": "Thomas",
  "email": "Thomas@email.com",
  "password": "123456",
  "phone": "+144418888",
  "isAdmin": false,
  "street": "Street 5",
  "apartment": "Apartment 4",
  "zip": "15002",
  "city": "Prague",
  "country": "Czech Republic"
}
```

### 4 - Get User and List of Users Excluding Password

### 5 - Login a User REST API & Creating a Token
```
http://localhost:3000/api/v1/users/62c98dd6831862990199465d PUT
{
  "name": "Thomas1",
  "email": "Thomas.jackson@email.com",
  
  "phone": "+144418888",
  "isAdmin": false,
  "street": "Street 5",
  "apartment": "Apartment 4",
  "zip": "15002",
  "city": "Prague",
  "country": "Czech Republic"
}
http://localhost:3000/api/v1/users/login POST
{
  "email": "Thomas.jackson@email.com",
  "password": "1234"
}

npm i jsonwebtoken
```

### 6 - Protecting the API and Authentication JWT Middleware
```
npm i express-jwt
https://jwt.io/

Authorization => Bearer Token
```

### 7 - Authentication Error Handling
