const express = require('express'); // This line imports the Express framework, which simplifies the process of creating and managing a web server
const path = require('path');

const app = express(); //initializes an Express application instance by calling the express() function.
const PORT = process.env.PORT || 3000; //This line sets up the port that the server will listen on. It first checks if the environment variable PORT is set (commonly used in hosting platforms). If not, it defaults to port 3000.
//This line tells Express to use its static middleware to serve static files from the public directory. Any files in this directory can be accessed directly through the browser. The path.join(__dirname, 'public') constructs an absolute path to the public directory based on the current script's location.
app.use(express.static(path.join(__dirname, 'public')));
//This sets up a route handler for the root URL (/). When a user accesses the root URL, the server responds by sending the index.html file from the views directory. This effectively serves your HTML file to the client's browser.
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});
//This line starts the Express server. It listens on the specified port (PORT) and logs a message to the console when the server starts successfully.
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
