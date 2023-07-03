const express = require("express");
const app = express();
const path = require("path");

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Define login API endpoint
app.post("/loginForm", (req, res) => {
  // Retrieve login credentials from the request body
  const { email, password } = req.body;

  // Perform authentication logic here
  // Validate the email and password against a user database or any other data source
  // Return appropriate responses based on the authentication result

  if (email === "example@example.com" && password === "password") {
    res.status(200).json({ message: "Login successful" });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

// Serve index.html for GET requests to the root URL
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`API server running on port ${port}`);
});
