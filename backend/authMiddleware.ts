// authMiddleware.ts
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { Request, Response, NextFunction } from 'express';

// Tipizzazione payload del JWT
interface TokenPayload {
  userId: number;
  email: string;
}

// Estensione di Express.Request per aggiungere req.user
declare global {
  namespace Express {
    interface Request {
      user?: TokenPayload;
    }
  }
}

export class AuthMiddleware {
  // Verifica JWT
  static verificaToken(req: Request, res: Response, next: NextFunction): void {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
      res.status(401).json({ message: 'Token mancante' });
      return;
    }

    jwt.verify(token, process.env.JWT_SECRET as string, (err, decoded) => {
      if (err || typeof decoded !== 'object' || !('userId' in decoded)) {
        res.status(403).json({ message: 'Token non valido' });
        return;
      }

      req.user = decoded as TokenPayload;
      next();
    });
  }

  // Hash password
  static async hashPassword(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { password } = req.body;

    if (!password) {
      res.status(400).json({ message: 'Password mancante' });
      return;
    }

    try {
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      req.body.passwordHash = hashedPassword;
      delete req.body.password;
      next();
    } catch (err) {
      res.status(500).json({ message: 'Errore nel processo di hashing' });
    }
  }
}
