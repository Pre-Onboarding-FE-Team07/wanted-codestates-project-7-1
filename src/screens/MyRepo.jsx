import { ScrollView } from 'native-base';
import Header from '../components/Header';
import RepoCard from '../components/RepoCard';
import fakeData from '../fakeData/repo.json';
import MainLayout from '../layouts/MainLayout';

export default function MyRepoScreen() {
  return (
    <MainLayout>
      <Header>My Repos</Header>
      <ScrollView my={2}>
        {fakeData
          .slice(0, 4)
          .map(({ id, full_name, description, open_issues_count }) => (
            <RepoCard
              key={id}
              name={full_name}
              desc={description}
              numberOfIssues={open_issues_count}
            />
          ))}
      </ScrollView>
    </MainLayout>
  );
}
