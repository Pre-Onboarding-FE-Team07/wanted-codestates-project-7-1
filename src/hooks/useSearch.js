import useSWR from 'swr';
import api from '../api';
import { PER_PAGE } from '../constants/repository';

const fetchSearchResult = async ([url, keyword, pageNum]) => {
  try {
    const res = await api.get(url, {
      headers: { Accept: 'application/vnd.github.v3+json' },
      params: {
        q: keyword,
        per_page: PER_PAGE,
        page: pageNum,
      },
    });
    return res?.data?.items;
  } catch (e) {
    console.log(e);
    return null;
  }
};

function useSearch(keyword, pageNum = 1) {
  const { data, error } = useSWR(
    ['search/repositories', keyword, pageNum],
    fetchSearchResult,
  );
  return [data, error];
}

export default useSearch;
