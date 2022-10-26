import * as ChakraUI from '@chakra-ui/react';

export type TextProps = Omit<ChakraUI.TextProps, 'size'> & {
  size?: 'sm' | 'md' | 'lg' | 'xl';
};
