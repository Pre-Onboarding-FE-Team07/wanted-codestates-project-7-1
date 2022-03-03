import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value !== null ? JSON.parse(value) : null;
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const removeData = async (key) => {
  try {
    //삭제 처리
  } catch (e) {
    console.log(e);
    return false;
  }
};
