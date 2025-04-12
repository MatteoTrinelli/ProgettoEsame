// login.ts
import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
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

  // Verifica le credenziali nel database
  db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results: any[]) => {
    if (err) {
      console.error('Errore nel database:', err);
      return res.status(500).json({ message: 'Errore server' });
    }

    // Verifica se sono stati trovati risultati
    if (results.length === 0) {
      return res.status(401).json({ message: 'Credenziali errate' });
    }

    const user = results[0]; // 'results' è un array, quindi possiamo accedere al primo elemento

    // Confronta la password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Credenziali errate' });
    }

    // Genera il token
    const token = generateToken(user.id, user.email);

    // Restituisci il token
    res.json({ token });
  });
});

export { loginRouter };
