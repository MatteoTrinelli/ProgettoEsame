// database.ts
import mysql from 'mysql2';
import dotenv from 'dotenv';
import fs from 'fs';

dotenv.config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: {
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

export { db };
