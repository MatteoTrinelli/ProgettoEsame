// server.ts
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'; 
import { loginRouter } from './user'; 

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Abilita CORS per tutte le origini
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true // per il JWT
}));

// Middleware per il parsing di JSON
app.use(express.json());


app.use('/auth', loginRouter); 

// Test route
app.get('/', (req, res) => {
  res.send('Server avviato 🚀');
});

// Avvia il server
app.listen(PORT, () => {
  console.log(`Server in ascolto su http://localhost:${PORT}`);
});
