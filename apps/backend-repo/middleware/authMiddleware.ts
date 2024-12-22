import { Request, Response, NextFunction } from 'express';

export const authMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  const token = req.headers.authorization;

  if (!token) {
    res.status(401).json({ message: 'Unauthorized' });
    return;
  }

  // Token validation logic here (simplified for this task)
  if (token !== 'valid-token') {
    res.status(403).json({ message: 'Forbidden' });
    return;
  }

  next(); // Pass control to the next middleware/route handler
};
