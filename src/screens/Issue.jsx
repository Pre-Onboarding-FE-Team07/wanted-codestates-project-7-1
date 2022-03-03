import { VStack } from 'native-base';
import { Text } from 'react-native';
import Header from '../components/Header';

export default function IssueScreen() {
  return (
    <VStack flex={1}>
      <Header>Explore Issues</Header>
      <Text>Issue</Text>
    </VStack>
  );
}
