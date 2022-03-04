import useSWR from 'swr';
import api from '../api';

function useIssues(owner, repo, pageIndex) {
  const fetcher = (url) => api.get(url).then((res) => res.data);

  const { data, error } = useSWR(
    `/repos/${owner}/${repo}/issues?page=${pageIndex}`,
    fetcher,
  );

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

  return { data, error, getTime };
}

export default useIssues;
