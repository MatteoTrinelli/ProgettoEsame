import express, { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { db } from './database';
import SHA256 from 'crypto-js/sha256.js';
import { authenticate } from './authentication';

const profileRouter = express.Router();


profileRouter.get('/api/getDisciplinaUtente',authenticate, (req: any, res: any) => {
  const { codDisciplina } = req.query;
  console.log()

  if (!codDisciplina) {
    return res.status(400).json({ message: 'Email e password sono obbligatorie.' });
  }

  db.query('SELECT * FROM discipline WHERE id = ?', [codDisciplina], (err, results: any[]) => {
    if (err) {
      console.error('Errore nel database:', err);
      return res.status(500).json({ message: 'Errore server' });
    }

    if (results.length === 0) {
      return res.status(401).json({ message: 'Credenziali errate' });
    }

    const nomeDisciplina = results[0].nome;


    res.status(200).json({ disciplina:nomeDisciplina });
  });
});

profileRouter.get('/api/getGradoUtente',authenticate, (req: any, res: any) => {
  const { codGrado } = req.query;

  if (!codGrado) {
    return res.status(400).json({ message: 'codice grado non presente' });
  }

  db.query('SELECT * FROM gradi WHERE id = ?', [codGrado], (err, results: any[]) => {
    if (err) {
      console.error('Errore nel database:', err);
      return res.status(500).json({ message: 'Errore server' });
    }

    if (results.length === 0) {
      return res.status(401).json({ message: 'Credenziali errate' });
    }

    const nomeGrado = results[0].nome;

    res.status(200).json({ grado:nomeGrado});
  });
});

export { profileRouter };
