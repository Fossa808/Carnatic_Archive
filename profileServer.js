const express = require('express');
const path = require('path');

const app = express();

// Optional: serve static assets like CSS/JS/images from a "public" folder
app.use(express.static('public'));

// Serve profile.html manually
app.get('/profile', (req, res) => {
  res.sendFile(path.join(__dirname, 'HTML', 'profile.html'));
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/profile`);
});
