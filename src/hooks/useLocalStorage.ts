import { Dispatch, SetStateAction, useEffect, useState } from 'react';

// load data from local storage
const useLocalStorage = <T>(storageKey: string, fallbackState: T): [T, Dispatch<SetStateAction<T>>] => {
  const key = localStorage.getItem(storageKey);
  const storedValue = key !== null && key !== 'undefined' ? JSON.parse(localStorage.getItem(storageKey) ?? '') : null;
  const [value, setValue] = useState<T>(storedValue ?? fallbackState);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(value));
  }, [value, storageKey]);

  return [value, setValue];
};

export default useLocalStorage;
