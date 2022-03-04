import Header from '../components/Header';
import IssueCard from '../components/IssueCard';
import PaginationList from '../components/PaginationList';
import MainLayout from '../layouts/MainLayout';
import useIssues from '../hooks/useIssues';
import { Center, Heading } from 'native-base';
import LoadingSkeleton from '../components/LoadingSkeleton';
import { useState } from 'react';
import { PER_PAGE, NUMBER_OF_PAGES } from '../constants/repository';

export default function IssueScreen() {
  const [page, setPage] = useState(1);
  const [useIssuesSWR] = useIssues();
  const { issues, isLoading, isError } = useIssuesSWR();

  if (isError) {
    return (
      <Center flex={1}>
        <Heading color="gray.400">
          An error occurred, please try again later.
        </Heading>
      </Center>
    );
  }

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  return (
    <MainLayout>
      <Header>Explore Issues</Header>
      <PaginationList
        data={issues.slice(page - 1, page + (PER_PAGE - 1))}
        currentPage={page}
        numberOfPages={NUMBER_OF_PAGES}
        onChange={setPage}
        renderItem={(issue) => (
          <IssueCard
            title={issue.title}
            url={issue.html_url}
            createdAt={issue.created_at}
            repo={issue.full_name}
          />
        )}
      />
    </MainLayout>
  );
}
