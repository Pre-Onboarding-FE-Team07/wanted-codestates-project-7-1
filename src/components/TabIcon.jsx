import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Octicons';

export default function TabIcon({ name, focused, color, size }) {
  return <Icon name={name} color={color} size={focused ? size : size - 5} />;
}

TabIcon.propTypes = {
  color: PropTypes.string,
  focused: PropTypes.bool,
  name: PropTypes.string,
  size: PropTypes.number,
};
