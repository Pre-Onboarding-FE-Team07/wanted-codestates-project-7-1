import { ScrollView } from 'native-base';
import Header from '../components/Header';
import RepoCard from '../components/RepoCard';
import useRepositoryStorage from '../hooks/useRepositoryStorage';
import MainLayout from '../layouts/MainLayout';

export default function MyRepoScreen() {
  const { repos } = useRepositoryStorage();
  return (
    <MainLayout>
      <Header>My Repos</Header>
      <ScrollView my={2}>
        {repos?.map(({ id, full_name, description, open_issues_count }) => (
          <RepoCard
            key={id}
            name={full_name}
            desc={description}
            numberOfIssues={open_issues_count}
            onPress={() => {}}
          />
        ))}
      </ScrollView>
    </MainLayout>
  );
}
