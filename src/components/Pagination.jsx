import { useState } from 'react';
import { FlatList } from 'native-base';
import { Button, View, Flex } from 'native-base';
import PropTypes from 'prop-types';

const Pagination = ({
  data,
  dataLimit,
  pageLimit,
  setPaginatedData,
  paginatedData,
}) => {
  const page = Math.round(data.length / dataLimit);
  const [currentPage, setCurrentPage] = useState(1);
  const goToNextPage = () => {
    if (currentPage === page) {
      return;
    }
    setCurrentPage((page) => page + 1);
  };
  const goToPreviousPage = () => {
    if (currentPage === 1) {
      return;
    }
    setCurrentPage((page) => page - 1);
  };
  const changePage = (index) => {
    setCurrentPage(index);
    const startIndex = index * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    paginatedData = data.slice(startIndex, endIndex);
    setPaginatedData(() => [...paginatedData]);
  };
  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };
  return (
    <>
      <Flex direction="row" mb={5}>
        <Button size="9" bg="primary.300" ml={2.5} mr={2.5}>
          Frev
        </Button>
        <FlatList
          numColumns={5}
          data={getPaginationGroup()}
          renderItem={({ item }) => (
            <Button
              size="9"
              bg="primary.300"
              ml={2.5}
              mr={2.5}
              onPress={() => changePage(item)}
            >
              {item}
            </Button>
          )}
        />
        <Button
          size="9"
          bg="primary.300"
          ml={2.5}
          mr={2.5}
          onPress={goToNextPage}
        >
          Next
        </Button>
      </Flex>
    </>
  );
};

export default Pagination;

Pagination.propTypes = {
  data: PropTypes.array,
  dataLimit: PropTypes.number,
  pageLimit: PropTypes.number,
  setPaginatedData: PropTypes.func,
  paginatedData: PropTypes.array,
};
