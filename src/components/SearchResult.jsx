import { useState } from 'react';
import { Center, Heading } from 'native-base';
import PaginationList from '../components/PaginationList';
import RepoCard from './RepoCard';
import LoadingSkeleton from './LoadingSkeleton';
import useSearch from '../hooks/useSearch';
import PropTypes from 'prop-types';
import useRepositoryStorage from '../hooks/useRepositoryStorage';
import { NUMBER_OF_PAGES, PER_PAGE } from '../constants/repository';

const SearchResult = ({ keyword }) => {
  const [page, setPage] = useState(1);
  const { searchResult, totalCount, isLoading, isError } = useSearch(
    keyword,
    page,
  );
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
        <Heading color="gray.400">No Matching Repository!</Heading>
      </Center>
    );
  }
  const maxPageNum = Math.ceil(totalCount / PER_PAGE);

  return (
    <PaginationList
      data={searchResult}
      currentPage={page}
      numberOfPages={maxPageNum}
      pageLimit={NUMBER_OF_PAGES}
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
