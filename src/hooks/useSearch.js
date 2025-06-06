import useSWR from 'swr';
import api from '../api';
import { PER_PAGE } from '../constants/repository';

const fetchSearchResult = async (url, keyword, pageNum) => {
  try {
    const res = await api.get(url, {
      params: {
        q: keyword,
        per_page: PER_PAGE,
        page: pageNum,
      },
    });
    return { data: res?.data?.items, totalCount: res?.data?.total_count };
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
};

function useSearch(keyword, pageNum = 1) {
  const { data, error } = useSWR(
    ['search/repositories', keyword, pageNum],
    fetchSearchResult,
  );
  return {
    searchResult: data?.data,
    totalCount: data?.totalCount,
    isLoading: !data && !error,
    isError: error,
  };
}

export default useSearch;
