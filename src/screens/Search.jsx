import { Center, Heading } from 'native-base';
import { useEffect, useState } from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import Header from '../components/Header';
import PaginationList from '../components/PaginationList';
import RepoCard from '../components/RepoCard';
import SearchBar from '../components/SearchBar';
import useSearch from '../hooks/useSearch';
import MainLayout from '../layouts/MainLayout';

export default function SearchScreen() {
  const [page, setPage] = useState(1);
  const [shrink, setShrink] = useState(false);
  const [list, setList] = useState([]);
  const getSearchResult = useSearch();

  const handleSearch = (keyword) => {
    getSearchResult(keyword).then(setList);
    setPage(1);
  };

  useEffect(() => {
    if (list.length) {
      setShrink(true);
    } else {
      setShrink(false);
    }
  }, [list]);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <MainLayout>
        <Header isShrink={shrink}>Search Repository</Header>
        <SearchBar onSearch={handleSearch} />
        {list.length ? (
          <PaginationList
            data={list}
            currentPage={page}
            numberOfPages={5}
            onChange={setPage}
            renderItem={({ full_name, description }) => (
              <RepoCard name={full_name} desc={description} />
            )}
          />
        ) : (
          <Center flex={1}>
            <Heading color="gray.300">No Repository!</Heading>
          </Center>
        )}
      </MainLayout>
    </TouchableWithoutFeedback>
  );
}
