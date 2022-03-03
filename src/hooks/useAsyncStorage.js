import { useState, useCallback, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const getStoredValue = async (key) => {
  try {
    const item = await AsyncStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (e) {
    console.log(e);
  }
};
export default function useAsyncStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(initialValue);
  useEffect(() => {
    setStoredValue(getStoredValue(key));
  }, [key]);

  const setValue = useCallback(
    async (value) => {
      try {
        await AsyncStorage.setItem(key, JSON.stringify(value));
        setStoredValue(value);
      } catch (e) {
        console.log(e);
      }
    },
    [key],
  );
  return [storedValue, setValue];
}
