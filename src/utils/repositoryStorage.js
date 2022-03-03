import { storeData, getData, removeData } from './asyncStorage';
import notifyMessage from './notifyMessage';
import { ASYNC_STORAGE_KEY, STORED_DATA_MAX } from '../constants/repository';

export const addItem = async (value) => {
  try {
    let storedValue = await getData(ASYNC_STORAGE_KEY);
    if (storedValue) {
      if (storedValue.length >= STORED_DATA_MAX) {
        notifyMessage('저장소는 최대 4개까지 등록할 수 있습니다.');
        return false;
      }
      if (!isExist(storedValue, value)) {
        storedValue.push(value);
      }
    } else {
      storedValue = new Array(value);
    }
    await storeData(ASYNC_STORAGE_KEY, storedValue);
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const getItem = async () => {
  try {
    let storedValue = await getData(ASYNC_STORAGE_KEY);
    console.log(storedValue);
    return storedValue;
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const removeItem = async (objectKey, value) => {
  try {
    // 배열에서 특정 데이터 삭제 처리
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const removeAll = () => removeData(ASYNC_STORAGE_KEY);
const isExist = (array, target) => array.some((item) => item.id === target.id);
