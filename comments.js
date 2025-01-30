// Create web server
const express = require('express');
const app = express();

// Create a route
app.get('/comments', (req, res) => {
  res.json({comments: [ {id: 1, author: 'John', body: 'Hello!'}, {id: 2, author: 'Mary', body: 'Hi!'} ]});
});

// Start server
app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});