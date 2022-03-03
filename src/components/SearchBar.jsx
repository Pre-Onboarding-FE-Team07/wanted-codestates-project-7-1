import { Button, FormControl, HStack, Input } from 'native-base';
import PropTypes from 'prop-types';
import { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [inputValue, setInputValue] = useState('');

  return (
    <FormControl isRequired>
      <HStack justifyContent="center">
        <Input
          type="text"
          value={inputValue}
          onChangeText={setInputValue}
          flex={1}
        />
        <Button onPress={() => onSearch(inputValue)}>검색</Button>
      </HStack>
    </FormControl>
  );
}

SearchBar.propTypes = {
  onSearch: PropTypes.func,
};
