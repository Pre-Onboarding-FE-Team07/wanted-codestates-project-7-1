import { Center, Heading } from 'native-base';
import { useEffect, useState } from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import Header from '../components/Header';
import LoadingSkeleton from '../components/LoadingSkeleton';
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
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async (keyword) => {
    if (!keyword) {
      setList([]);
      setResult('');
      return;
    }
    try {
      setLoading(true);
      setList(await getSearchResult(keyword));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      setResult(keyword);
      setPage(1);
    }
  };

  useEffect(() => {
    setShrink(!!list.length);
  }, [list]);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <MainLayout>
        <Header isShrink={shrink}>Search Repository</Header>
        <SearchBar onSearch={handleSearch} />
        {loading ? (
          // <Center flex={1}>
          //   <Heading color="gray.400">Loading...</Heading>
          // </Center>
          <LoadingSkeleton />
        ) : list.length ? (
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
            <Heading color="gray.400">
              {result ? 'No Repository!' : 'Find Your Favorite Repository!'}
            </Heading>
          </Center>
        )}
      </MainLayout>
    </TouchableWithoutFeedback>
  );
}
