import { Request,Response,NextFunction } from "express";

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