import { Box, Heading } from 'native-base';
import PropTypes from 'prop-types';

export default function Header({ children }) {
  return (
    <Box
      m="3"
      shadow="2"
      height="40"
      justifyContent="center"
      alignItems="center"
      bg="dark.100"
      borderRadius="20"
    >
      <Heading color="gray.200">{children}</Heading>
    </Box>
  );
}

Header.propTypes = {
  children: PropTypes.node,
};
