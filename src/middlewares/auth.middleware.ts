import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({
        message: 'Unauthorized: No token provided'
        });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET as string
        ) as { id: string; role: string };

        req.user = decoded;

        next();
    } catch (err) {
        return res.status(401).json({
        message: 'Unauthorized: Invalid token'
        });
    }
};


export const checkAdmin = (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
        return res.status(401).json({ message: "Not logged in" });
    }

    if (req.user.role !== 'admin') {
        return res.status(403).json({ message: "Only admin allowed" });
    }

    next();
};


export const checkAnalyst = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
    if (!req.user) {
        return res.status(401).json({ message: "Not logged in" });
    }

    if (req.user.role !== 'analyst' && req.user.role !== 'admin') {
        return res.status(403).json({ message: "Only analyst or admin allowed" });
    }

    next();
};