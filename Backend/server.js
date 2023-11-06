const express = require('express');
const mysql = require('mysql');

const app = express();

const db = mysql.createConnection({
  host: 'RAJESHDREAMS333',
  user: 'root',
  password: '8096',
  database: 'signup',
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }
  console.log('Connected to the database');
});

// Define routes and controllers for your application

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
