// login.ts
import express from 'express';
import jwt from 'jsonwebtoken';
import CryptoJS from 'crypto-js';
import { db } from './database';

const loginRouter = express.Router();

// Funzione per generare il JWT
function generateToken(userId: number, email: string) {
  return jwt.sign({ userId, email }, process.env.JWT_SECRET, { expiresIn: '1h' });
}

// Endpoint di login
loginRouter.post('/login', (req: any, res: any) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email e password sono obbligatorie.' });
  }

  // Calcola l'hash della password ricevuta (SHA256)
 // const hashedPassword = CryptoJS.SHA256(password).toString();

  // Verifica nel database
  db.query('SELECT * FROM utenti WHERE mail = ?', [email], (err, results: any[]) => {
    if (err) {
      console.error('Errore nel database:', err);
      return res.status(500).json({ message: 'Errore server' });
    }

    if (results.length === 0) {
      return res.status(401).json({ message: 'Credenziali errate' });
      console.log("qui")
    }

    const user = results[0];

    // Confronta l'hash
    if (user.passwordHash !== password) {
      return res.status(401).json({ message: 'Credenziali errate' });   
    }

    // Genera e restituisce il token
    const token = generateToken(user.id, user.email);
    console.log(token)
    res.json({ token });
  });
});

export { loginRouter };
