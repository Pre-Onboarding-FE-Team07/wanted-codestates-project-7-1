import { useState, useCallback } from 'react';
import useAsyncStorage from '../hooks/useAsyncStorage';
import notifyMessage from '../utils/notifyMessage';
import { ASYNC_STORAGE_KEY, STORED_DATA_MAX } from '../constants/repository';

export default function useRepositoryStorage(initialValue) {
  const [storedValue, setStoredValue] = useAsyncStorage(
    ASYNC_STORAGE_KEY,
    initialValue,
  );
  const [storedRepo, setStoredRepo] = useState(() => {
    return storedValue || initialValue;
  });

  const setRepo = useCallback(
    async (value) => {
      try {
        if (value && value.length > STORED_DATA_MAX) {
          notifyMessage('저장소는 최대 4개까지 등록할 수 있습니다.');
          return false;
        }
        setStoredValue(value);
        setStoredRepo(value);
        notifyMessage('성공적으로 등록되었습니다.');
      } catch (e) {
        console.log(e);
      }
    },
    [setStoredValue],
  );
  return [storedRepo, setRepo];
}
