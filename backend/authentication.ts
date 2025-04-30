import jwt from 'jsonwebtoken';
import {Request, Response} from 'express';

const JWT_SECRET = process.env.JWT_SECRET;

export const authenticate = (req: Request, res: Response, next: () => void): any => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({message: 'Access Denied: No Token Provided!'});
    }

    try {
        (req as any).user = jwt.verify(token, JWT_SECRET) as { id: string; username: string };
        next();
    } catch (err) {
        res.status(403).json({message: 'Invalid or Expired Token'});
    }
};