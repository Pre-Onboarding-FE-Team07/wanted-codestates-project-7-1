import { FlatList } from 'native-base';
import PropTypes from 'prop-types';
import { cloneElement } from 'react';

export default function PaginationList({
  currentPage = 1,
  numberOfPages = 1,
  onChange = () => undefined,
  data,
  renderItem,
}) {
  return (
    <FlatList
      data={data}
      stickyHeaderIndices={[0]}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => cloneElement(renderItem(item))}
    />
  );
}

PaginationList.propTypes = {
  currentPage: PropTypes.number,
  numberOfPages: PropTypes.number,
  onChange: PropTypes.func,
  data: PropTypes.array,
  renderItem: PropTypes.func,
};
