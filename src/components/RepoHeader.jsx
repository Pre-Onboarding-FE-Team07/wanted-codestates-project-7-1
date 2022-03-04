import { Heading, HStack, Icon, Text, VStack } from 'native-base';
import PropTypes from 'prop-types';
import Octicons from 'react-native-vector-icons/Octicons';

export default function RepoHeader({ fullName, numberOfIssues }) {
  const [user, repo] = fullName.split('/');

  return (
    <HStack alignItems="flex-end" space={0.3} mb={2}>
      <Icon as={Octicons} name="repo" size="5" />
      <VStack flex={1}>
        <HStack justifyContent="space-between">
          <Text fontSize="xs" lineHeight="xs">
            {user}
          </Text>
          <Text fontSize="xs" lineHeight="xs">
            # of Issues {numberOfIssues}
          </Text>
        </HStack>
        <Heading
          color="dark.200"
          fontSize="lg"
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {repo}
        </Heading>
      </VStack>
    </HStack>
  );
}
RepoHeader.propTypes = {
  fullName: PropTypes.string.isRequired,
  numberOfIssues: PropTypes.number.isRequired,
};
