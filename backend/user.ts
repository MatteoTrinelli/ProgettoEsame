import express, { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { db } from './database';
import SHA256 from 'crypto-js/sha256.js';
const authRouter = express.Router();

function generateToken(userId: number, email: string,nome:string,cognome:string,codRuolo:number,codDisciplina:number,codGrado:number,citta:string) {
  return jwt.sign({ userId, email,nome,cognome,codRuolo,codDisciplina,codGrado,citta }, process.env.JWT_SECRET as string, { expiresIn: '1h' });
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

    const token = generateToken(user.id, user.mail,user.nome,user.cognome,user.codRuolo,user.codDisciplina,user.codGrado,user.luogo_nascita);
    res.status(200).json({ token:token });
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
    codNazionalita,
    codice_disciplina,
    codice_grado,
    cellulare,
    codice_ruolo,
    mail,
    password,
  } = req.body;

  //  if (
  //    !nome || !cognome || !data_nascita || !luogo_nascita || !nazionalita ||
  //    !codice_disciplina || !codice_grado || !numero_cellulare ||
  //    !mail || !password
  //  ) {
  //     console.log("si schianta qui")
  //    return res.status(400).json({ message: 'Tutti i campi obbligatori devono essere compilati' }); 
  //  }
  
  const passwordHash = SHA256(password).toString();

  const sql = `
    INSERT INTO utenti (
      nome, cognome, data_nascita, luogo_nascita, nazionalita,
      codDisciplina, codGrado,
      numero_cellulare, codRuolo, mail, passwordHash
    )
    VALUES (?, ?,?,? , ?, ?, ?, ?, ?, ?, ?)
  `;
console.log("arriva qui")
  const values = [
    nome, cognome, data_nascita, luogo_nascita, codNazionalita,
    codice_disciplina, codice_grado,
    cellulare, codice_ruolo, mail, passwordHash
  ];

  db.query(sql, values, (err: any) => {
    if (err) {
      console.error('Errore nel database:', err);
      return res.status(500).json({ message: 'Errore server' });
    }

    res.status(201).json({ message: 'Utente registrato con successo' });
  });
});


authRouter.get('/api/getDisciplina', async(req:any,res:any)=>{
  const sql="SELECT * FROM discipline";
  db.query(sql,(err:any,results:any[])=>{
    if(err)
    {
      console.error('Errore nel server:', err)
      return res.status(500).json({message: "Errore server"})
    }
    let vectDiscipline=results;
    return res.status(200).json({discipline:vectDiscipline})
  })
})

authRouter.get('/api/getGrado', async(req:any,res:any)=>{
const codDisciplina = (req.query.codDisciplina);

 const sql="SELECT id,nome FROM gradi WHERE codDisciplina=?";
  if (codDisciplina==null)
  {
    return res.status(404).json({message:"codDisciplina non può essere nullo"})
  }
  db.query(sql,[codDisciplina],(err:any,results:any[])=>{
    if(err)
    {
      console.error('Errore nel server:', err)
      return res.status(500).json({message: "Errore server"})
    }
    let vectGradi=results;
    return res.status(200).json({gradi:vectGradi})
  })
})


authRouter.get('/api/getNationality',async(req:any,res:any)=>{
  const sql="SELECT * FROM nazionalita";
  db.query(sql,(err:any,results:any[])=>{
    if(err)
    {
     console.error('Errore nel database:', err);
      return res.status(500).json({ message: 'Errore server' });
    }
    let vectNazionalità= results;
    return res.status(201).json({nazionalita:vectNazionalità});
  })
})

export { authRouter };
