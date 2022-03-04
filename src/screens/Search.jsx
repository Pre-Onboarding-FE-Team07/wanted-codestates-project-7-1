import { useState } from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import { useToast } from 'native-base';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import SearchResult from '../components/SearchResult';
import MainLayout from '../layouts/MainLayout';

export default function SearchScreen() {
  const [showResult, setShowResult] = useState(false);
  const [shrink, setShrink] = useState(false);
  const [keyword, setKeyword] = useState('');
  const toast = useToast();

  const handleSearch = async (value) => {
    if (!value) {
      toast.show({ description: '검색어를 입력해 주세요' });
      return;
    }
    setShrink(true);
    setKeyword(value);
    setShowResult(true);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <MainLayout>
        <Header isShrink={shrink}>Search Repository</Header>
        <SearchBar onSearch={handleSearch} />
        {showResult && <SearchResult keyword={keyword} />}
      </MainLayout>
    </TouchableWithoutFeedback>
  );
}
