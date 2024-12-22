import { Request, Response } from 'express';
import { fetchUsers, updateUser, addUser  } from '../repository/userCollection';
//import { User } from '../entities/user';
import { User } from '@monorepo/shared/src/user'

export const fetchUserData = async (req: Request, res: Response) => {
  try {
    const users = await fetchUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch user data', error });
  }
};

export const updateUserData = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id, ...data } = req.body;
  
      if (!id || Object.keys(data).length === 0) {
        res.status(400).json({ message: 'Invalid request' });
        return;
      }
  
      await updateUser(id, data);
      res.json({ message: 'User updated successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to update user data', error });
    }
  };

  export const createUser = async (req: Request, res: Response) => {
    const userData: User = req.body; 
    try {
      const userId = await addUser(userData);
      res.status(201).json({ message: 'User added successfully', userId });
    } catch (error) {
      res.status(500).json({ message: 'Failed to add user', error });
    }
  };
