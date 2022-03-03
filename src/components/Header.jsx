import { Box, Heading } from 'native-base';
import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

const AnimatedBox = Animated.createAnimatedComponent(Box);

export default function Header({ children, isShrink = false }) {
  const boxHeight = useRef(new Animated.Value(150)).current;

  useEffect(() => {
    if (isShrink) {
      Animated.timing(boxHeight, {
        toValue: 50,
        duration: 100,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(boxHeight, {
        toValue: 150,
        duration: 100,
        useNativeDriver: false,
      }).start();
    }
  }, [isShrink, boxHeight]);

  return (
    <AnimatedBox
      shadow="2"
      justifyContent="center"
      alignItems="center"
      bg="dark.100"
      borderRadius="20"
      style={{ height: boxHeight }}
    >
      <Heading color="gray.200">{children}</Heading>
    </AnimatedBox>
  );
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
  isShrink: PropTypes.bool,
};
