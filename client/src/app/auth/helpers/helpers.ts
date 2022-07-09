import jwtDecode from 'jwt-decode';

export const isNilOrEmpty = (value: any) => {
  return value === undefined || value === null || value === '';
};

export const getTokenName = (token: string) => {
  return isNilOrEmpty(token) ? '' : jwtDecode<{ name: string }>(token).name;
};
