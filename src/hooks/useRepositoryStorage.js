import useSWR from 'swr';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ASYNC_STORAGE_KEY, STORED_DATA_MAX } from '../constants/repository';
import notifyMessage from '../utils/notifyMessage';

const extractRepoData = ({ id, full_name, description, open_issues_count }) => {
  return { id, full_name, description, open_issues_count };
};

const isExist = (array, id) => array.some((item) => item.id === id);
const getStoredValue = async (key) => {
  try {
    const item = await AsyncStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (e) {
    console.log(e);
  }
};

function useRepositoryStorage() {
  const { data, mutate } = useSWR(ASYNC_STORAGE_KEY, getStoredValue);

  const addRepo = async (repo) => {
    if (!repo || !repo.full_name) {
      return;
    }
    if (data?.length >= STORED_DATA_MAX) {
      notifyMessage('저장소는 최대 4개까지 등록할 수 있습니다.');
      return;
    }
    try {
      const newRepoData = extractRepoData(repo);
      if (isExist(data, newRepoData.id)) {
        notifyMessage('이미 등록된 저장소입니다.');
        return;
      }
      const newStoredRepos = data ? [...data, newRepoData] : [newRepoData];
      await AsyncStorage.setItem(
        ASYNC_STORAGE_KEY,
        JSON.stringify(newStoredRepos),
      );
    } catch (e) {
      console.log(e);
    }
  };

  const filteringArray = (id) => {
    return data.filter((item) => item.id !== id);
  };

  const removeRepo = async (target) => {
    try {
      const newRepoData = filteringArray(target);
      await AsyncStorage.setItem(
        ASYNC_STORAGE_KEY,
        JSON.stringify(newRepoData),
      );
    } catch (e) {
      console.log(e);
    }
  };

  return {
    repos: data,
    addRepo: (repos) => {
      addRepo(repos);
      return mutate();
    },
    removeRepo: (repo) => {
      removeRepo(repo);
      return mutate();
    },
  };
}

export default useRepositoryStorage;
