const express = require('express');
const path = require('path');
const app = express();

// Serve static assets (CSS and JS) from a "public" folder
//Makes the Style and Script temporary "public" folders
// app.use(express.static('public'));
app.use('/style', express.static('Style'));
app.use('/script', express.static('Script'));

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/profile`);
});
