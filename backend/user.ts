import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { db } from './database';
import SHA256 from "crypto-js/sha256.js";

const authRouter = express.Router();

function generateToken(userId: number, email: string) {
  return jwt.sign({ userId, email }, process.env.JWT_SECRET as string, { expiresIn: '1h' });
}

authRouter.post('/api/login', (req:any, res:any) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email e password sono obbligatorie.' });
  }

  db.query('SELECT * FROM utenti WHERE mail = ?', [email], async (err, results: any[]) => {
    if (err) {
      console.error('Errore nel database:', err);
      return res.status(500).json({ message: 'Errore server' });
    }

    if (results.length === 0) {
      return res.status(401).json({ message: 'Credenziali errate' });
    }

    const user = results[0];
    const provaPassword=SHA256(password);
    if(password!=user.passwordHash)
      {
         return res.status(401).json({ message: 'Credenziali errate' });
      }

    const token = generateToken(user.id, user.email);
    res.json({ token });
  });
});

authRouter.post('/register', (req, res) => {
  const { email, passwordHash, } = req.body;

  db.query(
    'INSERT INTO utenti (email, passwordHash, nome, cognome, dataNascita, nazionalità, luogoNascita,disciplinaPrincipale, ) VALUES (?, ?)',
    [email, passwordHash],
    (err, result) => {
      if (err) {
        console.error('Errore nel database:', err);
        return res.status(500).json({ message: 'Errore server' });
      }

      res.status(201).json({ message: 'Utente registrato con successo' });
    }
  );
});


export { authRouter };
