import { db } from '../config/firebaseConfig';
import { User } from '../entities/user';
//import { User } from '@monorepo/shared';

const USERS_COLLECTION = 'USERS';

export const fetchUsers = async (): Promise<User[]> => {
  const snapshot = await db.collection(USERS_COLLECTION).get();
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as User[];
};

export const updateUser = async (id: string, data: Partial<User>): Promise<void> => {
  await db.collection(USERS_COLLECTION).doc(id).update(data);
};

export const addUser = async (userData: User): Promise<string> => {
    try {
      const userRef = await db.collection(USERS_COLLECTION).add(userData);
      return userRef.id; // Return the document ID of the newly created user
    } catch (error) {
      console.error('Error adding user:', error);
      throw new Error('Error adding user');
    }
  };
