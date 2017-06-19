# rest-api

## List of api routes

Route | HTTP | Description
------|------|--------------
/api/signin | POST | Sign In
/api/signup | POST | Sign Up  > name, email, password
/api/users | GET | Get all the users (admin only)
/api/users/:id | GET | Get single user (admin & logged user)
/api/users | POST | Create a user (admin only) > name,email,password,role(default=user)
/api/users/:id | DELETE | Delete a user (admin only)
/api/users/:id | PUT | Update a user with new info (admin & logged user) > name,email

## List of filter routes

Route | HTTP | Description
------|------|------------
/api/users?name="{name}" | GET | Get {name} match in users (admin only)
/api/users?name="{na}" | GET | Get {na} like in users (admin only)

## Setup
```
npm install
npm start
npm run dev

```
