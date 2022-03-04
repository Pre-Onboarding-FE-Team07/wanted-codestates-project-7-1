import useSWR from 'swr';
import api from '../api';
import { PER_PAGE } from '../constants/repository';

const fetchIssues = async (url) => {
  try {
    const res = await api.get(url, {
      headers: { Accept: 'application/vnd.github.v3+json' },
      params: {
        per_page: PER_PAGE,
      },
    });
    console.log(res.data);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

function useIssues() {
  const useIssuesSWR = (owner, repo) => {
    const { data, error } = useSWR(
      `repos/${owner}/${repo}/issues`,
      fetchIssues,
    );

    return { issues: data, isLoading: !error && !data, isError: error };
  };

  const useIssueTime = (createdDate) => {
    const now = new Date();
    const created = new Date(createdDate);
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
  return [useIssuesSWR, useIssueTime];
}

export default useIssues;
