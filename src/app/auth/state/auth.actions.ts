export type AuthAction =
  | { type: 'setToken'; payload: { token: string } }
  | { type: 'setLoading'; payload: { loading: boolean } };

export const setLoading = (loading: boolean): AuthAction => {
  return { type: 'setLoading', payload: { loading } };
};

export const setToken = (token: string): AuthAction => {
  return { type: 'setToken', payload: { token } };
};
