import { ToastAndroid, Platform, Alert } from 'react-native';

export default (msg) => {
  if (Platform.OS === 'android') {
    ToastAndroid.show(msg, 100);
  } else {
    Alert.alert(msg);
  }
};
