import axios from 'axios';

function useSearch() {
  const getSearchResult = async (keyword, pageNum = 1) => {
    try {
      const res = await axios.get(
        'https://api.github.com/search/repositories',
        {
          headers: { Accept: 'application/vnd.github.v3+json' },
          params: {
            q: keyword,
            per_page: 10,
            page: pageNum,
          },
        },
      );
      return res?.data?.items;
    } catch (e) {
      console.log(e);
      return null;
    }
  };

  return getSearchResult;
}

export default useSearch;
