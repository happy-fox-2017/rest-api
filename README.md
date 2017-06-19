# rest-api

# TODO App

Demo app with basic REST API

# REST API
List of basic routes:

| Route         | HTTP          | Description   |
| ------------- |:-------------:| ------------- |
| <span style="color:red">/api/signup</span>    | POST    | Signup with new user info             |
| <span style="color:red">/api/signin</span>    | POST    | Sign in while get an access token based on credentials         |
| <span style="color:red">/api/users</span>     | GET     | Get all the users info (admin only)             |
| <span style="color:red">/api/users/:id</span> | GET     | Get a single user info (admin and authenticated user)             |
| <span style="color:red">/api/users</span>     | POST    | Create user (admin only)|
| <span style="color:red">/api/users/:id</span> | DELETE  | Delete a user (admin only)|
| <span style="color:red">/api/users/:id</span> | PUT     | Update a user with new info (admin only and authenticated user)|

# Usage
With only npm :

>**
  npm install
  npm start
**

Access the website vi http://localhost:3000 or API via http://localhost:3000/api

