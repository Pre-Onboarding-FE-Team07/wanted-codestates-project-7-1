import { Button, Center, HStack } from 'native-base';
import PropTypes from 'prop-types';
import { useRef } from 'react';
import Octicons from 'react-native-vector-icons/Octicons';

export default function Pagination({
  numberOfPages,
  currentPage,
  onChange = () => undefined,
}) {
  const pages = useRef([...Array(numberOfPages + 1).keys()].slice(1));

  return (
    <Center>
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
    </Center>
  );
}

Pagination.propTypes = {
  currentPage: PropTypes.number,
  numberOfPages: PropTypes.number,
  onChange: PropTypes.func,
};
