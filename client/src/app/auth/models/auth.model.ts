export interface IAuthContext {
  auth: IAuthState;
  logout: () => void;
  login: (username: string, password: string) => void;
}

export interface IAuthState {
  name: string;
  token: string;
  loading?: boolean;
}
