import api from '../api';
import useRepositoryStorage from './useRepositoryStorage';

function useIssues() {
  const { repos } = useRepositoryStorage();

  // repo 결과에 따라 issue 합친 데이터
  const useIssuesData = () => {
    try {
      const issueAllData = [];

      repos?.forEach(async (element) => {
        let fullName = element.full_name;
        const res = await api.get(`repos/${element.full_name}/issues`);
        const { title, html_url, created_at } = res.data;

        // 1-1. 모든 issue 데이터 한 배열에 넣기
        // (issue제목, issue연결주소, full_name, 생성날짜)
        issueAllData.push({
          title,
          html_url,
          fullName,
          created_at,
        });
        return issueAllData;
      });
    } catch (err) {
      console.log(err);
    }
  };

  // 2. created_at 별로 filter처리 -> 최신순
  const issueFilterData = () => {
    useIssuesData
      .sort((a, b) => {
        const newDate1 = new Date(a.created_at);
        const newDate2 = new Date(b.created_at);
        return newDate2 - newDate1;
      })
      .then((err) => console.log(err));
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

  return [issueFilterData, useIssueTime];
}

export default useIssues;

// swr 적용 코드
// @Lee-ye-ji
// function useIssues(owner, repo, pageIndex) {
//   const fetcher = (url) => api.get(url).then((res) => res.data);

//   const { data, error } = useSWR(
//     `/repos/${owner}/${repo}/issues?page=${pageIndex}`,

// --------------------

// @dev-seomoon
// const fetchIssues = async (url) => {
//   try {
//     const res = await api.get(url, {
//       headers: { Accept: 'application/vnd.github.v3+json' },
//       params: {
//         per_page: PER_PAGE,
//       },
//     });
//     console.log(res.data);
//     return res.data;
//   } catch (e) {
//     console.log(e);
//   }
// };

// function useIssues() {
//   const useIssuesSWR = (owner, repo) => {
//     const { data, error } = useSWR(
//       `repos/${owner}/${repo}/issues`,
//       fetchIssues,
//     );

//     return { issues: data, isLoading: !error && !data, isError: error };
//   };
// ...
// }
