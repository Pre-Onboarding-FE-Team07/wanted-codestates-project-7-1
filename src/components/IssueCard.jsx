import { Box, HStack, Icon, Link, Text } from 'native-base';
import PropTypes from 'prop-types';
import Octicons from 'react-native-vector-icons/Octicons';

export default function IssueCard({ title, url, repo, createdAt }) {
  return (
    <Box borderRadius="md" bg="white" shadow={3} my="1.5" mx="1">
      <Link href={url}>
        <Box mt="2" mb="3" mx="2" flex={1}>
          <HStack alignItems="center" mb={2} space={1}>
            <Icon as={Octicons} name="issue-opened" size={4} mb={0.5} />
            <Text
              color="dark.200"
              fontWeight="bold"
              fontSize="md"
              numberOfLines={2}
              flexShrink="1"
              lineHeight="17"
            >
              {title}
            </Text>
          </HStack>
          <HStack justifyContent="space-between">
            <Text fontSize="xs">{repo}</Text>
            <Text fontSize="xs">{createdAt}</Text>
          </HStack>
        </Box>
      </Link>
    </Box>
  );
}

IssueCard.propTypes = {
  repo: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
  createdAt: PropTypes.string,
};
