import { FC } from 'react';
import * as ChakraUI from '@chakra-ui/react';

export type TextProps = FC<
  Omit<ChakraUI.TextProps, 'size'> & {
    size?: 'sm' | 'md' | 'lg' | 'xl';
  }
>;
