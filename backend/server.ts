import express from 'express';
import mysql from 'mysql2';
import dotenv from 'dotenv';
import cors from 'cors'; // 👉 importa cors
import fs from 'fs';

dotenv.config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl:{
    ca: fs.readFileSync(process.env.PATH_TO_CA),
  },
});

db.connect((err) => {
  if (err) {
    console.error('Errore connessione al database:', err);
    process.exit(1);
  }
  console.log('Connesso al database MySQL');
});

const app = express();
const PORT = process.env.PORT || 3000;

// 👉 Abilita CORS per tutte le origini 
app.use(cors());

// Middleware per JSON
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send('Server avviato 🚀');
});

app.listen(PORT, () => {
  console.log(`Server in ascolto su http://localhost:${PORT}`);
});
