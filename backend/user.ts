import express, { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { db } from './database';
import SHA256 from 'crypto-js/sha256.js';

const authRouter = express.Router();

function generateToken(userId: number, email: string) {
  return jwt.sign({ userId, email }, process.env.JWT_SECRET as string, { expiresIn: '1h' });
}

// LOGIN
authRouter.post('/api/login', (req: any, res: any) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email e password sono obbligatorie.' });
  }

  db.query('SELECT * FROM utenti WHERE mail = ?', [email], (err, results: any[]) => {
    if (err) {
      console.error('Errore nel database:', err);
      return res.status(500).json({ message: 'Errore server' });
    }

    if (results.length === 0) {
      return res.status(401).json({ message: 'Credenziali errate' });
    }

    const user = results[0];
    const hashedInput = SHA256(password).toString();

    if (hashedInput !== user.passwordHash) {
      return res.status(401).json({ message: 'Credenziali errate' });
    }

    const token = generateToken(user.id, user.mail);
    res.json({ token });
  });
});

// REGISTRAZIONE
authRouter.post('/api/register', (req: any, res: any) => {
  console.log(req.body);
  const {
    nome,
    cognome,
    data_nascita,
    luogo_nascita,
    nazionalita,
    codice_disciplina,
    codice_grado,
    codice_palestra,
    numero_cellulare,
    codice_ruolo,
    email,
    password,
  } = req.body;

  if (
    !nome || !cognome || !data_nascita || !luogo_nascita || !nazionalita ||
    !codice_disciplina || !codice_grado || !numero_cellulare ||
    !email || !password
  ) {
    return res.status(400).json({ message: 'Tutti i campi obbligatori devono essere compilati' });
    console.log("si schianta qui")
  }

  const passwordHash = SHA256(password).toString();

  const sql = `
    INSERT INTO utenti (
      nome, cognome, data_nascita, luogo_nascita, nazionalita,
      codice_disciplina, codice_grado, codice_palestra,
      numero_cellulare, codice_ruolo, mail, passwordHash
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [
    nome, cognome, data_nascita, luogo_nascita, nazionalita,
    codice_disciplina, codice_grado, codice_palestra || null,
    numero_cellulare, codice_ruolo || null, email, passwordHash,
  ];

  db.query(sql, values, (err: any) => {
    if (err) {
      console.error('Errore nel database:', err);
      return res.status(500).json({ message: 'Errore server' });
    }

    res.status(201).json({ message: 'Utente registrato con successo' });
  });
});

export { authRouter };
