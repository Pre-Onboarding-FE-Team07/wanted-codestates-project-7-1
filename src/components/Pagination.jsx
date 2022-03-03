import { Box, Button, HStack, Icon } from 'native-base';
import PropTypes from 'prop-types';
import { useRef } from 'react';
import Octicons from 'react-native-vector-icons/Octicons';

function ChevronButton({ type, disabled, onPress }) {
  return (
    <Button
      bg="transparent"
      pr={type === 'left' ? '1' : '0.5'}
      pl={type === 'left' ? '3' : '4'}
      disabled={disabled}
      onPress={onPress}
      _pressed={{ bg: 'transparent', opacity: 0.5 }}
    >
      <Icon
        size="5"
        as={<Octicons name={`chevron-${type}`} />}
        color={disabled ? 'gray.400' : 'dark.200'}
      />
    </Button>
  );
}

ChevronButton.propTypes = {
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
  type: PropTypes.oneOf(['left', 'right']),
};

export default function Pagination({
  numberOfPages,
  currentPage,
  onChange = () => undefined,
}) {
  const pages = useRef([...Array(numberOfPages + 1).keys()].slice(1));

  return (
    <HStack
      alignItems="center"
      justifyContent="space-between"
      bg="muted.200"
      borderRadius="lg"
      borderTopRadius="none"
    >
      <ChevronButton
        type="left"
        disabled={currentPage <= 1}
        onPress={() => onChange(currentPage - 1)}
      />
      <Box>
        <HStack>
          {pages.current.map((pageNo) => (
            <Button
              key={pageNo}
              bg="transparent"
              _pressed={{ backgroundColor: 'transparent' }}
              onPress={() => onChange(pageNo)}
            >
              <Octicons
                size={15}
                name={currentPage === pageNo ? 'square-fill' : 'square'}
              />
            </Button>
          ))}
        </HStack>
      </Box>

      <ChevronButton
        type="right"
        disabled={currentPage >= numberOfPages}
        onPress={() => onChange(currentPage + 1)}
      />
    </HStack>
  );
}

Pagination.propTypes = {
  currentPage: PropTypes.number,
  numberOfPages: PropTypes.number,
  onChange: PropTypes.func,
};
