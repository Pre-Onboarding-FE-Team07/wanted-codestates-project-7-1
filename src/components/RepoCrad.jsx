import { Box, HStack, Icon, Text } from 'native-base';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';

export default function RepoCard({ name, desc, subscribe }) {
  return (
    <Box borderRadius="md" bg="white" shadow={3} my="1.5" mx="1">
      <TouchableOpacity onPress={subscribe}>
        <Box mt="2" mb="3" mx="2">
          <HStack alignItems="center" space={0.3}>
            <Icon as={Octicons} name="repo" size="4" mt="1" />
            <Text color="dark.200" fontWeight="bold" fontSize="lg">
              {name}
            </Text>
          </HStack>
          <Text color="dark.300" numberOfLines={2} fontSize="xs">
            {desc}
          </Text>
        </Box>
      </TouchableOpacity>
    </Box>
  );
}

RepoCard.propTypes = {
  name: PropTypes.string,
  desc: PropTypes.string,
  subscribe: PropTypes.func,
};
