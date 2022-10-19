import * as ChakraUI from '@chakra-ui/react';

//types
import type { TextProps } from './types';

export const Text: TextProps = ({ size = 'sm', children, ...props }) => {
  const dynamicSize = {
    sm: '16px',
    md: '19.2px',
    lg: '20.8px',
    xl: '24px',
  }[size];

  return (
    <ChakraUI.Text color="gray.800" fontSize={dynamicSize} {...props}>
      {children}
    </ChakraUI.Text>
  );
};
