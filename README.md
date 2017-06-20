# My App Name
Tugas pertama di phase2

# rest-api
### list of basic routes:

|         Routes         | HTTP | Description           |
|:----------------------:|------|-----------------------|
| /api/hello?name={name} | GET  | print hello, {name} ! |

### list of user routes:

|     Routes     | HTTP   | Description                          |
|:--------------:|--------|--------------------------------------|
| /api/signup    | POST   | sign up with new user info           |
| /api/signin    | POST   | sign in while get an access token based on credentials |
| /api/users     | GET    | get all the users info (admin only)  |
| /api/users/:id | GET    | get a single user info (admin and authenticated user)                   |
| /api/users     | POST   | create a user (admin only)           |
| /api/users/:id | DELETE | delete a user (admin only)           |
| /api/users/:id | PUT    | update a user with new info          |

 



