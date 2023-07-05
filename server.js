const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Middleware to parse the request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Define login API endpoint for both GET and POST requests
app.all('/api/login', (req, res) => {
  if (req.method === 'GET') {
    res.send('Please use a POST request to login.');
  } else if (req.method === 'POST') {
    // Retrieve login credentials from the request body
    const { email, password } = req.body;

    // Perform authentication logic here
    // ...

    if (email === 'example@example.com' && password === 'password') {
      res.status(200).json({ message: 'Login successful' });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`API server running on port ${port}`);
});
