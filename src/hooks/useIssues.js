import axios from 'axios';

function useSearch() {
  const getIssues = async (owner, repo) => {
    try {
      const res = await axios.get(
        `https://api.github.com/repos/${owner}/${repo}/issues`,
        {
          headers: { Accept: 'application/vnd.github.v3+json' },
          params: {
            per_page: 10,
          },
        },
      );
      console.log(res.data);
      return res.data;
    } catch (e) {
      console.log(e);
    }
  };

  const getTime = (createdAt) => {
    const now = new Date();
    const created = new Date(createdAt);
    const timeMinutes = Math.floor(
      (now.getTime() - created.getTime()) / 1000 / 60,
    );
    const timeHours = Math.floor(timeMinutes / 60);
    const timeDays = Math.floor(timeMinutes / 60 / 24);

    if (timeMinutes < 1) {
      return '방금전';
    }
    if (timeMinutes < 60) {
      return `${timeMinutes}분전`;
    }
    if (timeHours < 24) {
      return `${timeHours}시간 전`;
    }
    if (timeDays < 365) {
      return `${timeDays}일전`;
    }
    return `${Math.floor(timeDays / 365)}년 전`;
  };

  return [getIssues, getTime];
}

export default useSearch;
