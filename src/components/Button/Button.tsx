import { FC } from 'react';
import * as ChakraUI from '@chakra-ui/react';

//types
import type { ButtonProps } from './types';

export const Button: FC<ButtonProps> = ({ text, ...props }) => {
  return (
    <ChakraUI.Button
      size="lg"
      bg="purple.700"
      color="white"
      _hover={{ opacity: 0.8 }}
      _active={{
        bg: 'purple.700',
      }}
      {...props}>
      {text}
    </ChakraUI.Button>
  );
};
