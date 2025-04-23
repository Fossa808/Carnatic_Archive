const express = require('express');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static assets (CSS and JS) from a "public" folder
// Makes the Style and Script temporary "public" folders
app.use('/style', express.static('Style'));
app.use('/script', express.static('Script'));

const db = new sqlite3.Database('./mydatabase.db');

db.run(
    CREATE TABLE IF NOT EXISTS users(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        email TEXT
    )
);

app.get('/profile', (req, res) => { // Serve profile.html manually
  res.sendFile(path.join(__dirname, 'HTML', 'profile.html'));
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/profile`);
});
