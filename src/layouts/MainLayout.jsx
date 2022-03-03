import { VStack } from 'native-base';
import PropTypes from 'prop-types';
export default function MainLayout({ children, ...props }) {
  return (
    <VStack m="3" flex={1} {...props}>
      {children}
    </VStack>
  );
}
MainLayout.propTypes = {
  children: PropTypes.node,
};
