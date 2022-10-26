import * as ChakraUI from '@chakra-ui/react';

export type HeadingProps = Omit<ChakraUI.HeadingProps, 'size'> & {
  size?: 'xl' | '1xl' | '2xl' | '3xl';
};
