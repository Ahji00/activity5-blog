// src/utils/auth.js
import { jwtDecode } from 'jwt-decode'; // ✅ correct way for v3+

export const setToken = (token) => {
  localStorage.setItem('token', token);
};

export const getToken = () => localStorage.getItem('token');

export const getUser = () => {
  const token = getToken();
  if (!token) return null;
  try {
    return jwtDecode(token); // decode JWT to get user info
  } catch {
    return null;
  }
};

export const logout = () => {
  localStorage.removeItem('token');
};
