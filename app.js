// Importing express module
const express = require('express');
const path = require('path');

// Creating an instance of the express app
const app = express();

// Define the folder to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Define a route for the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Starting the server and listening on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
