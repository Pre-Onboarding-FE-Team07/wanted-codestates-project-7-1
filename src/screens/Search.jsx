import { VStack } from 'native-base';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import SearchBar from '../components/SearchBar';

export default function SearchScreen() {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <VStack flex={1}>
        <SearchBar onSearch={(value) => console.log(value)} />
      </VStack>
    </TouchableWithoutFeedback>
  );
}
