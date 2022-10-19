import { FC } from 'react';
import * as ChakraUI from '@chakra-ui/react';

export type HeadingProps = FC<
  Omit<ChakraUI.HeadingProps, 'size'> & {
    size?: 'xl' | '1xl' | '2xl' | '3xl';
  }
>;
