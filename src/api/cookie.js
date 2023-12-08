import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const setCookie = (key, value) => {
  cookies.set(key, value, { path: '/' });
};

export const getCookie = (key) => {
  return cookies.get(key);
};

export const removeCookie = (key) => {
  cookies.remove(key, { path: '/' });
};