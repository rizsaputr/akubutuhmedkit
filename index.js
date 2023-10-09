import express from "express";

import db from "./config/database.js";

import UserRoute from "./Routes/UserRoutes.js";

import mysql2 from "mysql2";

const app = express();
const port = 3000;

// Middleware untuk mengizinkan pengiriman dan penerimaan JSON
app.use(express.json());

// Konfigurasi koneksi database

// Membuat koneksi


// Route untuk mengambil data dari database
//app.use(express.json());
app.get('/data', (req, res) => {
  const sql = 'SELECT * FROM pengiriman';

  // Mengirimkan permintaan SQL ke database
  connection.query(sql, (err, results) => {
    if (err) {
      console.error('Error saat mengambil data: ' + err);
      res.status(500).json({ error: 'Gagal mengambil data dari database' });
      return;
    }

    res.send(results); // Mengirim hasil ke client sebagai JSON
  });
});

// Menjalankan server Express
app.use(UserRoute);

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});

