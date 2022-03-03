import { Button, FormControl, HStack, Input } from 'native-base';
import PropTypes from 'prop-types';
import { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [inputValue, setInputValue] = useState('');

  const search = () => onSearch(inputValue);

  return (
    <FormControl isRequired my="1">
      <HStack justifyContent="center" space="1">
        <Input
          type="text"
          value={inputValue}
          onChangeText={setInputValue}
          flex={1}
          variant="underlined"
          borderColor="dark.500"
          onEndEditing={search}
          fontSize="sm"
          placeholder="즐겨 찾는 저장소를 검색하고 등록하세요! (최대 4개)"
        />
        <Button borderRadius="2xl" bg="dark.100" onPress={search}>
          검색
        </Button>
      </HStack>
    </FormControl>
  );
}

SearchBar.propTypes = {
  onSearch: PropTypes.func,
};
