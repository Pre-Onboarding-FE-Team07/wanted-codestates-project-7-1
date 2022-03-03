import { VStack } from 'native-base';
import PropTypes from 'prop-types';
export default function MainLayout({ children, ...props }) {
  return (
    <VStack p="3" flex={1} {...props} bg="muted.200">
      {children}
    </VStack>
  );
}
MainLayout.propTypes = {
  children: PropTypes.node,
};
