# rest-api

## Basic Routes

Route | HTTP | Description
------|------|------------
/api/hello?name={name} | GET | Selamat datang {name}

## List of user routes

Route | HTTP | Description
------|------|--------------
/api/users | GET | Get all the users
/api/users/:id | GET | Get single user
/api/users | POST | Create a user
/api/users/:id | DELETE | Delete a user
/api/users/:id | PUT | Update a user with new info

## List of filter routes

Route | HTTP | Description
------|------|------------
/api/users?name="{name}" | GET | Get {name} match in users
/api/users?name="{na}" | GET | Get {na} like in users
/api/users?email="{email}" | GET | Get {email} match in users
