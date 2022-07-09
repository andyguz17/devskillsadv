import { useContext } from 'react';
import { AuthContext } from '../auth/AuthProvider';

export const useAuth = () => {
  const context = useContext(AuthContext);
  return { ...context, isAuth: !!context.auth?.token };
};
