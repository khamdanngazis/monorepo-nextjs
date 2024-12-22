"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const authMiddleware = (req, res, next) => {
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
exports.authMiddleware = authMiddleware;
