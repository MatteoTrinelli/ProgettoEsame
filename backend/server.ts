// server.ts
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { loginRouter } from './user';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// CORS
app.use(cors({
  origin: '*',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());

app.use('/auth', loginRouter);

// Test route
app.get('/', (req, res) => {
  res.send('Server avviato 🚀');
});

app.listen(PORT, () => {
  console.log(`Server in ascolto su http://localhost:${PORT}`);
});
