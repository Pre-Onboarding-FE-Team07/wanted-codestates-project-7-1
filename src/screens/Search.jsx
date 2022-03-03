import { useState } from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import Header from '../components/Header';
import PaginationList from '../components/PaginationList';
import RepoCard from '../components/RepoCrad';
import SearchBar from '../components/SearchBar';
import fakeData from '../fakeData/repo.json';
import MainLayout from '../layouts/MainLayout';

export default function SearchScreen() {
  const [page, setPage] = useState(1);
  const [shrink, setShrink] = useState(false);

  const onSearch = (value) => {
    console.log(value);
    setShrink(true);
  };

  console.log(page);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <MainLayout>
        <Header isShrink={shrink}>Search Repository</Header>
        <SearchBar onSearch={onSearch} />
        <PaginationList
          data={fakeData}
          currentPage={page}
          numberOfPages={5}
          onChange={setPage}
          renderItem={({ full_name, description }) => (
            <RepoCard name={full_name} desc={description} />
          )}
        />
      </MainLayout>
    </TouchableWithoutFeedback>
  );
}
