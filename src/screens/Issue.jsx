import Header from '../components/Header';
import IssueCard from '../components/IssueCard';
import PaginationList from '../components/PaginationList';
import fakeData from '../fakeData/issue.json';
import MainLayout from '../layouts/MainLayout';

export default function IssueScreen() {
  return (
    <MainLayout>
      <Header>Explore Issues</Header>
      <PaginationList
        data={fakeData}
        renderItem={({ title, html_url, created_at }) => (
          <IssueCard
            title={title}
            url={html_url}
            createdAt={created_at}
            repo="test/repo"
          />
        )}
      />
    </MainLayout>
  );
}
