# My App Name
Demo App with basic Rest API.

##REST API
List of user routes :

|      Route     |  HTTP  |                         Description                        |
|:--------------:|:------:|:----------------------------------------------------------:|
| /api/signup    | POST   | Sign up with new user info                                 |
| /api/signin    | POST   | Sign in while get an access token based on credentials     |
| /api/users     | GET    | Get all the users info (admin only)                        |
| /api/users/:id | GET    | Get a single user info (admin and authenticated user)      |
| /api/users     | POST   | Create a user (admin only)                                 |
| /api/users/:id | DELETE | Delete a user (admin only)                                 |
| /api/users/:id | PUT    | Update a user with new info (admin and authenticated user) |


***

##Usage

With only postman

Access the website via https://restfull-api-myapp.herokuapp.com/ or API via https://restfull-api-myapp.herokuapp.com/api