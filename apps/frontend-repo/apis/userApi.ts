import axios from 'axios';
//import { User } from './user';
import { User } from '@monorepo/shared/src/user'

// URL Backend
const BASE_URL = 'http://localhost:5000/api';
const TOKEN = 'valid-token'; // Replace dengan logika autentikasi jika dinamis

// Fetch user data
export const fetchUserData = async (): Promise<User[]> => {
  const response = await axios.get(`${BASE_URL}/fetch-user-data`, {
    headers: { Authorization: TOKEN },
  });

  return response.data; // Return the entire array
};


// Update user data
export const updateUserData = async (user: User): Promise<User> => {
  const response = await axios.put(`${BASE_URL}/update-user-data`, user, {
    headers: {
      Authorization: TOKEN,
      'Content-Type': 'application/json',
    },
  });
  return response.data;
};
