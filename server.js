const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Middleware to parse the request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Define login API endpoint
app.post('/api/login', (req, res) => {
  // Retrieve login credentials from the request body
  const { email, password } = req.body;

  // Perform authentication logic here
  // Validate the email and password against a user database or any other data source
  // Return appropriate responses based on the authentication result

  if (email === 'example@example.com' && password === 'password') {
    res.status(200).json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`API server running on port ${port}`);
});
