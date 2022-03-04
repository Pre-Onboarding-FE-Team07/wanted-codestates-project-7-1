import { Box, Text } from 'native-base';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import RepoHeader from './RepoHeader';

export default function RepoCard({
  name,
  desc,
  opPress = () => {},
  numberOfIssues,
}) {
  return (
    <Box borderRadius="md" bg="white" shadow={3} my="1.5" mx="1" px={1}>
      <TouchableOpacity onPress={opPress}>
        <Box mt="2" mb="3" mx="2" overflow="hidden">
          <RepoHeader fullName={name} numberOfIssues={numberOfIssues} />
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
  numberOfIssues: PropTypes.number,
  opPress: PropTypes.func,
};
