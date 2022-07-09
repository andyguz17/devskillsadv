import { createContext, ReactNode, useEffect, useReducer } from 'react';

import { useLocalStorage } from '../hooks/useLocalStorage';
import { authenticate } from './api/authenticate';
import { getTokenName } from './helpers/helpers';
import { IAuthContext } from './models/auth.model';
import { setLoading, setToken } from './state/auth.actions';
import { authReducer } from './state/authReducer';

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, saveToken] = useLocalStorage('token', '');
  const [auth, dispatch] = useReducer(authReducer, {
    token: token ?? '',
    name: getTokenName(token),
  });

  const value: IAuthContext = {
    auth,
    logout: () => dispatch(setToken('')),
    login: async (username, password) => {
      try {
        dispatch(setLoading(true));
        const { token } = await authenticate({ username, password });
        dispatch(setToken(token));
      } catch (error) {
        throw new Error(`Something went wrong ${error}`);
      } finally {
        dispatch(setLoading(false));
      }
    },
  };

  useEffect(() => {
    saveToken(auth.token);
  }, [auth]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
