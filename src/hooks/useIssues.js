import api from '../api';
import useRepositoryStorage from './useRepositoryStorage';

function useIssues() {
  const { repos } = useRepositoryStorage();

  // repo 결과에 따라 issue 합친 데이터
  const useIssuesData = () => {
    repos?.forEach(async (element) => {
      try {
        let issueAllData = [];
        const res = await api.get(`repos/${element.full_name}/issues`);

        const repo_title = () => {
          const repoArr = element.full_name.split('/');
          return repoArr[repoArr.length - 1];
        };
        const { title, html_url, created_at } = res.data;

        // 1. 모든 issue 데이터 한 배열에 넣기
        // (issue제목, issue연결주소, repository명, 생성날짜)
        issueAllData.push({
          title,
          html_url,
          repo_title,
          created_at,
        });

        // 2. created_at 별로 filter처리 -> 최신순
        const issueFilterData = issueAllData.sort(function (a, b) {
          const newDate1 = new Date(a.created_at);
          const newDate2 = new Date(b.created_at);
          return newDate2 - newDate1;
        });

        return issueFilterData;
      } catch (err) {
        console.log(err);
      }
    });
  };

  // issue 날짜에 맞게 최신순 정렬

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

  return [useIssuesData, useIssueTime];
}

export default useIssues;
