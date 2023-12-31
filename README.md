﻿#Login API Documentation
API Endpoint
POST /api/login

#Description
This API endpoint allows users to authenticate by providing their email and password.

#Request
Method: POST
Content-Type: application/json
Request Body
The request body should contain the following parameters:

Parameter	Type	Description
email	string	User's email
password	string	User's password
Example:

json
{
  "email": "example@example.com",
  "password": "password"
}
Response
The API will respond with the appropriate status code and a JSON response body.

Success Response
Status Code: 200
Response Body:
json
{
  "message": "Login successful"
}
Error Response
Status Code: 401
Response Body:
json
{
  "message": "Invalid credentials"
}
Example Usage
cURL
bash
curl -X POST -H "Content-Type: application/json" -d '{"email":"example@example.com","password":"password"}' http://localhost:3000/api/login
JavaScript (using fetch)
javascript
fetch('http://localhost:3000/api/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    email: 'example@example.com',
    password: 'password'
  })
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
