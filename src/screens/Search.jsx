import { useEffect, useState } from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import SearchResult from '../components/SearchResult';
import MainLayout from '../layouts/MainLayout';

export default function SearchScreen() {
  const [showResult, setShowResult] = useState(false);
  const [shrink, setShrink] = useState(false);
  const [keyword, setKeyword] = useState('');

  const handleSearch = async (value) => {
    setKeyword(value);
    setShowResult(true);
  };

  useEffect(() => {
    setShrink(showResult);
  }, [showResult]);

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
