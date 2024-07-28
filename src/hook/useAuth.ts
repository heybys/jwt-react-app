import {useState} from 'react';

const useAuth = () => {
  const [authTokens, setAuthTokens] = useState(() => {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
    return { accessToken, refreshToken };
  });

  const saveTokens = (accessToken: string, refreshToken: string) => {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
    setAuthTokens({ accessToken, refreshToken });
  };

  const clearTokens = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    setAuthTokens({ accessToken: null, refreshToken: null });
  };

  return {
    authTokens,
    isAuthenticated: authTokens && authTokens.accessToken && authTokens.refreshToken,
    saveTokens,
    clearTokens,
  };
};

export default useAuth;