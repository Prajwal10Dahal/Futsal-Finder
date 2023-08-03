// usePrivateRoute.js

import { useNavigate } from 'react-router-dom';
import { useUserContext } from './UserContext';

export const usePrivateRoute = () => {
  const navigate = useNavigate();
  const { userData } = useUserContext();

  if (!userData) {
    // If the user is not authenticated, navigate to the login page or any other page
    navigate('/login'); // Replace '/login' with the path of your login page
  }

  // Return the user data or any other value that indicates authentication status
  return userData;
};
