import { $AUTH_API } from '../../global/env';

interface IAuthenticate {
  username: string;
  password: string;
}

interface IAuthResponse {
  iat: number;
  exp: number;
  token: string;
}

export const authenticate = async (auth: IAuthenticate) => {
  const response = await fetch($AUTH_API, {
    method: 'POST',
    body: JSON.stringify(auth),
    headers: { 'Content-Type': 'application/json' },
  });

  return (await response.json()) as IAuthResponse;
};
