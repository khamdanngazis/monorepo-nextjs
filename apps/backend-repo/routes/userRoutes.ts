import { Router } from 'express';
import { fetchUserData, updateUserData, createUser } from '../controller/api';
import { authMiddleware } from '../middleware/authMiddleware';

const router = Router();

router.get('/fetch-user-data', authMiddleware, fetchUserData);
router.put('/update-user-data', authMiddleware, updateUserData);
router.post('/add-user-data', authMiddleware, createUser);

export default router;
