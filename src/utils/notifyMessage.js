import { ToastAndroid, Platform, Alert } from 'react-native';

export default (msg) => {
  if (Platform.OS === 'android') {
    ToastAndroid.show(msg);
  } else {
    Alert.alert(msg);
  }
};
