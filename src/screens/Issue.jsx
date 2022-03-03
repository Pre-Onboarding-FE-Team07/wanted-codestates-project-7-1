import { VStack } from 'native-base';
import { useEffect, useState } from 'react';
import { Text } from 'react-native';
import Header from '../components/Header';
import useIssues from '../hooks/useIssues';

export default function IssueScreen() {
  const [getIssues, getTime] = useIssues();
  const [issueList, setIssueList] = useState([]);

  useEffect(() => {
    getIssues('mui', 'material-ui').then(setIssueList);
  }, [getIssues]);

  return (
    <VStack flex={1}>
      <Header>Explore Issues</Header>
      <Text>Issue</Text>
    </VStack>
  );
}
