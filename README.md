# CRUD-API
https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/crud-api/assignment.md

# START

1. Git clone this repository

2. Checkout on `develop` branch

3. Change your port in file `.env`. Default port is 4000

4. `npm i`

If everything is OK, `node_modules` folder should appear.

5. `npm run start:dev`

If everything is OK, message `Server is running on PORT ${port}` should appear in the console

6. `npm run start:prod`

If everything is OK, `public` folder should appear in the project. 

# TESTING 
You can use, for example, `Postman` to test API.

You need indicate in headers `'content-type': 'application/json'`.

```
GET http://localhost:MAIN_PORT/api/users

GET http://localhost:MAIN_PORT/api/users/{userId}

POST http://localhost:MAIN_PORT/api/users

PUT http://localhost:MAIN_PORT/api/users/{userId}

DELETE http://localhost:MAIN_PORT/api/users/{userId}
```

Structure of the body to create / update a new user (all fields are required!!).

```
{
    "username": "name",
    "age": 15,
    "hobbies": [“hobbie"]
}
```
