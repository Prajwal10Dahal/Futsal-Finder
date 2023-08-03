import axios from 'axios';
import { useUserContext } from './UserContext';

const API_URL = 'http://localhost:5000';

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/users/login`, {
      email,
      password,
    });
    const userData = response.data;
    setUserData(userData); // Assuming you have a setUserData function in your context
    return userData;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const logout = () => {
  setUserData(null); // Assuming you have a setUserData function in your context
};
