import useSWR from 'swr';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ASYNC_STORAGE_KEY, STORED_DATA_MAX } from '../constants/repository';
import notifyMessage from '../utils/notifyMessage';

const getStoredValue = async (key) => {
  try {
    const item = await AsyncStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (e) {
    console.log(e);
  }
};

function useRepositoryStorage() {
  const { data, mutate } = useSWR(ASYNC_STORAGE_KEY, () => {
    getStoredValue(ASYNC_STORAGE_KEY);
  });

  const setRepos = async (repos) => {
    if (!repos || !Array.isArray(repos)) {
      return;
    }
    if (repos.length > STORED_DATA_MAX) {
      notifyMessage('저장소는 최대 4개까지 등록할 수 있습니다.');
      return;
    }
    if (repos.length === 0) {
      AsyncStorage.removeItem(ASYNC_STORAGE_KEY);
      return;
    }
    try {
      await AsyncStorage.setItem(ASYNC_STORAGE_KEY, JSON.stringify(repos));
    } catch (e) {
      console.log(e);
    }
  };

  return {
    repos: data,
    setRepos: (repos) => {
      setRepos(repos);
      return mutate();
    },
  };
}

export default useRepositoryStorage;
