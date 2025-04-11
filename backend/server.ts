// server.ts
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'; 
import { loginRouter } from './login'; // Importiamo il router con gli endpoint di login

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

// Utilizza il router per gli endpoint di login
app.use('/api', loginRouter); // Gli endpoint di login saranno sotto /api

// Test route
app.get('/', (req, res) => {
  res.send('Server avviato 🚀');
});

// Avvia il server
app.listen(PORT, () => {
  console.log(`Server in ascolto su http://localhost:${PORT}`);
});
