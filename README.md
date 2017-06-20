# REST API

### Setup
### API Route

|Route | Method | Usage | Return |
|:---:| :---: | :--- | :--- |
|/api/signup |POST | Submit body form with attributes of "username" and "password" | Created user |
|/api/signin |POST | Submit body form with registered username and password in attributes of "username" and "password" | Token with id and is_admin data |
|/api/users | GET | Input admin token in "token" attribute in headers | List of all registered users |
|/api/users/:id | GET | Input admin or user token in "token" attribute in headers | Single user info, if using user token return user in token data , if using admin token return user with id in params|
|/api/users/:id | DELETE | Input admin or user token in "token" attribute in headers  | Delete success message with id of deleted user. Admin can delete all other user. User can only delete itself |
|/api/users/:id | PATCH | Input admin or user token in "token" attribute in headers | Update success message with id of updated user. Admin can update all other user. User can only update itself |
|/api/users |POST| Submit body form with attributes of "username" and "password" | Return created admin |
