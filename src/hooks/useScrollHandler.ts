import { useEffect } from 'react';

const useScrollHandler = (handler: () => void) => {
  useEffect(() => {
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  });
};

export default useScrollHandler;
