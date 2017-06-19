# rest-api

rest-api is a simple API prototype, it can create user and get user-list


### Installation

Install the dependencies and devDependencies and start the server.

```sh
$ cd rest-api
$ npm install
$ npm start
```


### API-Route

Instructions on how to use them in your own application are linked below.

|ROUTE | HTTP | Descreption |
| ------ | ------ | ------ |
| /api/signup | POST | Sign up with new user info |
| /api/signin | POST | Sign in while get an access token based on credentials |
| /api/users | GET | Get all users info (ADMIN ONLY) |
| /api/users/:id | GET | Get a single user info (ADMIN AND AUTHENTICATED USER ONLY) |
| /api/users | POST | Create a user (ADMIN ONLY) |
| /api/users/:id | DELETE | Delete a user (ADMIN ONLY) |
| /api/users/:id | PUT | Update a user with a new info (ADMIN AND AUTHENTICATED USER ONLY) |

### Licensed

this software is free of license, maybe.
