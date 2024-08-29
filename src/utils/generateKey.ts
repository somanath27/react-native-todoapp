import {JwtPayload} from 'jwt-decode';
import {atob} from 'react-native-quick-base64';

export const generateKey = () => {
  return Math.random().toString(36).substring(7);
};

export interface DecodedToken extends JwtPayload {
  exp: number;
  [key: string]: any;
}

export function decodeToken(token: string): DecodedToken {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split('')
      .map(c => {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join(''),
  );

  return JSON.parse(jsonPayload);
}
