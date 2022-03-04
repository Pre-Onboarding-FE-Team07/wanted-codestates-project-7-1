import { useState } from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import SearchResult from '../components/SearchResult';
import MainLayout from '../layouts/MainLayout';
import notifyMessage from '../utils/notifyMessage';

export default function SearchScreen() {
  const [showResult, setShowResult] = useState(false);
  const [shrink, setShrink] = useState(false);
  const [keyword, setKeyword] = useState('');

  const handleSearch = async (value) => {
    if (!value) {
      notifyMessage('검색어를 입력해주세요.');
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
