import { ScrollView } from 'native-base';
import Header from '../components/Header';
import RepoCard from '../components/RepoCard';
import useRepositoryStorage from '../hooks/useRepositoryStorage';
import MainLayout from '../layouts/MainLayout';
import PropTypes from 'prop-types';
import { Alert } from 'react-native';

export default function MyRepoScreen() {
  const { removeRepo, repos } = useRepositoryStorage();

  const onPress = (id) => {
    Alert.alert(
      '삭제',
      '정말 삭제하시겠습니까?',
      [
        {
          text: '아니요',
          style: 'cancel',
        },
        { text: '네', onPress: () => removeRepo(id) },
      ],
      { cancelable: false },
    );
  };

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
            onPress={() => {
              onPress(id);
            }}
          />
        ))}
      </ScrollView>
    </MainLayout>
  );
}

MyRepoScreen.propTypes = {
  onPress: PropTypes.func,
};
