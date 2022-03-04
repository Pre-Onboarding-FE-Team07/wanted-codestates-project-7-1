import useSWR from 'swr';
import api from '../api';
import useRepositoryStorage from './useRepositoryStorage';

const extractIssueData = ({
  id,
  title,
  html_url,
  created_at,
  repository_url,
}) => ({
  id,
  title,
  html_url,
  created_at,
  full_name: repository_url.split('/').slice(-2).join('/'),
});

const fetchIssues = async (repos) => {
  if (!repos) {
    return null;
  }
  const promises = repos.map((repo) =>
    api.get(`repos/${repo.full_name}/issues`).then((res) => res.data),
  );
  const responses = await Promise.all(promises);
  const list = responses.flat().map(extractIssueData);
  list.sort((a, b) => {
    return new Date(b.created_at) - new Date(a.created_at);
  });
  return list;
};

function useIssues() {
  const { repos } = useRepositoryStorage();
  const useIssuesSWR = () => {
    const { data, error } = useSWR([repos], fetchIssues);

    return { issues: data, isLoading: !data && !error, isError: error };
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
