import { useEffect, useState } from 'react';

export const useLoginState = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!(localStorage.getItem('token')));

  useEffect(() => {
    setIsLoggedIn(!!(localStorage.getItem('token'))); 

  }, []);

  return isLoggedIn;
};

export default useLoginState;