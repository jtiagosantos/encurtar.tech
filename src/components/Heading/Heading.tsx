import * as ChakraUI from '@chakra-ui/react';

//types
import type { HeadingProps } from './types';

export const Heading: HeadingProps = ({ size = 'xl', children, ...props }) => {
  const dynamicSize = {
    xl: '30px',
    '1xl': '36px',
    '2xl': '40px',
    '3xl': '48px',
  }[size];

  return (
    <ChakraUI.Heading color="gray.800" fontSize={dynamicSize} {...props}>
      {children}
    </ChakraUI.Heading>
  );
};
