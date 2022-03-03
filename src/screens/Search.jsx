import { Text, VStack, ScrollView, Button, HStack, Box } from 'native-base';
import { useState } from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import SearchBar from '../components/SearchBar';
import useSearch from '../hooks/useSearch';

export default function SearchScreen() {
  const [list, setList] = useState([]);
  const getSearchResult = useSearch();
  const handleSearch = (keyword) => {
    getSearchResult(keyword).then(setList);
  };

  return (
    <>
      <TouchableWithoutFeedback flex={0.2} onPress={() => Keyboard.dismiss()}>
        <VStack>
          <SearchBar onSearch={handleSearch} />
        </VStack>
      </TouchableWithoutFeedback>
      <ScrollView flex={1}>
        {list.map((item) => (
          <HStack
            alignItems="center"
            key={item.id}
            h="16"
            bg="white"
            rounded="md"
            shadow="3"
            my="1.5"
            px="3"
          >
            <Box flex={1}>
              <Text color="primary.700" numberOfLines={1}>
                {item.full_name}
              </Text>
              <Text color="muted.700" numberOfLines={1}>
                {item.description}
              </Text>
            </Box>
            <Button variant="outline" size="sm" ml="8">
              ADD
            </Button>
          </HStack>
        ))}
      </ScrollView>
    </>
  );
}
