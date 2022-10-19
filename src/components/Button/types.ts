import { FC } from 'react';
import * as ChakraUI from '@chakra-ui/react';

export type ButtonProps = FC<
  ChakraUI.ButtonProps & {
    text: string;
  }
>;
