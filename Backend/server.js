const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '8096',
  database: 'signup',
  insecureAuth : true
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }
  console.log('Connected to the database');
});

app.post('/Sign', (req, res) => {
  const { name, email, password } = req.body;

  // You should perform validation here before inserting data into the database.

  const query = `INSERT INTO login(name, email, password) VALUES (?)`;
  db.query(query, [name, email, password], (err, result) => {
    if (err) {
      console.error('Database error: ' + err);
      res.status(500).json({ success: false, message: 'Registration failed' });
    } else {
      res.json({ success: true, message: 'Registration successful' });
    }
  });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
