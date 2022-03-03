import { Button, FormControl, HStack, Icon, Input } from 'native-base';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function SearchBar({ onSearch }) {
  const [inputValue, setInputValue] = useState('');

  const search = () => inputValue && onSearch(inputValue);

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
        <Button
          leftIcon={
            <Icon
              as={Ionicons}
              name="search-outline"
              color="gray.100"
              size="6"
            />
          }
          borderRadius="lg"
          bg="dark.100"
          onPress={search}
        />
      </HStack>
    </FormControl>
  );
}

SearchBar.propTypes = {
  onSearch: PropTypes.func,
};
