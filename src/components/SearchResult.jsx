import { useState } from 'react';
import { Center, Heading } from 'native-base';
import PaginationList from '../components/PaginationList';
import RepoCard from './RepoCard';
import LoadingSkeleton from './LoadingSkeleton';
import useSearch from '../hooks/useSearch';
import PropTypes from 'prop-types';
import useRepositoryStorage from '../hooks/useRepositoryStorage';

const SearchResult = ({ keyword }) => {
  const [page, setPage] = useState(1);
  const { searchResult, isLoading, isError } = useSearch(keyword, page);
  const { addRepo } = useRepositoryStorage();

  if (isError) {
    return (
      <Center flex={1}>
        <Heading color="gray.400">
          An error occurred, please try again later.
        </Heading>
      </Center>
    );
  }

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  if (searchResult.length === 0) {
    return (
      <Center flex={1}>
        <Heading color="gray.400">
          {keyword
            ? 'No Matching Repository!'
            : 'Find Your Favorite Repository!'}
        </Heading>
      </Center>
    );
  }

  return (
    <PaginationList
      data={searchResult}
      currentPage={page}
      numberOfPages={5}
      onChange={setPage}
      renderItem={(repo) => (
        <RepoCard
          name={repo.full_name}
          desc={repo.description}
          numberOfIssues={repo.open_issues_count}
          onPress={() => {
            addRepo(repo);
          }}
        />
      )}
    />
  );
};

SearchResult.propTypes = {
  keyword: PropTypes.string,
  page: PropTypes.number,
  setPage: PropTypes.func,
};

export default SearchResult;
