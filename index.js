const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = process.env.PORT || 3000;

// ✅ Tambahkan ini supaya bisa baca JSON dari body request
app.use(express.json());

// Koneksi ke database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'ridhorzq',
  database: 'mahasiswa',
  port: 3309
});

// Cek koneksi database
db.connect((err) => {
  if (err) {
    console.error('❌ Error connecting to database: ' + err.message);
    return;
  }
  console.log('✅ Connected to database!');
});

// GET data mahasiswa
app.get('/mahasiswa', (req, res) => {
  db.query("SELECT * FROM biodata", (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      res.status(500).send("Database query error");
    } else {
      res.json(results);
    }
  });
});



