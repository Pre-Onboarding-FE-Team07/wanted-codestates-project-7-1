import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import MainLayout from '../layouts/MainLayout';

export default function SearchScreen() {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <MainLayout>
        <Header>Search Repository</Header>
        <SearchBar onSearch={(value) => console.log(value)} />
      </MainLayout>
    </TouchableWithoutFeedback>
  );
}
