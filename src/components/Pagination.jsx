import { Box, Button, HStack, Icon, Text } from 'native-base';
import PropTypes from 'prop-types';
import Octicons from 'react-native-vector-icons/Octicons';
import { TouchableOpacity } from 'react-native';

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

const getPageLength = ({ currentPage, pageLimit, numberOfPages }) => {
  const pageGroupNum = Math.ceil(currentPage / pageLimit);
  const lastPageNum = pageGroupNum * pageLimit;
  return numberOfPages > lastPageNum ? pageLimit : numberOfPages % pageLimit;
};

export default function Pagination({
  numberOfPages,
  currentPage,
  pageLimit,
  onChange = () => undefined,
}) {
  const startpageNo =
    parseInt((currentPage - 1) / pageLimit, 10) * pageLimit + 1;
  const pageLength = getPageLength({ currentPage, pageLimit, numberOfPages });
  console.log(`${100 / pageLimit}%`);
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
      <Box flex={1}>
        <HStack justifyContent="center">
          {Array(pageLength)
            .fill()
            .map((_, index) => (
              <TouchableOpacity
                key={index}
                bg="transparent"
                _pressed={{ backgroundColor: 'transparent' }}
                onPress={() => onChange(index + startpageNo)}
                style={{ width: `${100 / pageLimit}%` }}
              >
                <Octicons
                  size={15}
                  style={{ textAlign: 'center' }}
                  name={
                    (currentPage - 1) % pageLimit === index
                      ? 'square-fill'
                      : 'square'
                  }
                />
              </TouchableOpacity>
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
  pageLimit: PropTypes.number,
  onChange: PropTypes.func,
};
