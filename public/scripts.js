document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the form from submitting

  // Simulate API request/response
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // Perform validation or further processing as needed
  if (email && password) {
    alert("Login successful!");
    // You can redirect to another page or perform additional actions here
  } else {
    alert("Please enter valid credentials.");
  }
});
