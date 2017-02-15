'use strict';

// DONE: Initialize your project using NPM to create and populate a package.json file

// DONE: Require the Express package that you installed via NPM, and instantiate the app
const express = require('express');
const app = express();
// Remember to install express, and be sure that it's been added to your package.json as a dependency

const PORT = process.env.PORT || 3000;

// DONE: Include all of the static resources as an argument to app.use()
app.use(express.static('./public'));
// app.get('/index.html', function(request, response) {
//   response.sendFile('./public/index.html');
//   // DONE: Using the response object, send the index.html file back to the user
// });

// DONE: (STRETCH) Write a new route that will handle a request and send the new.html file back to the user
app.get('/new', function(request, response) {
  response.sendFile('./public/new.html', {root: '.'});
});

app.listen(PORT, function() {
  console.log('app is running on localhost:3000');
  // DONE: Log to the console a message that lets you know which port your server has started on
});
