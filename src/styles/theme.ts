import { extendTheme, Theme } from '@chakra-ui/react';

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        maxW: '1920px',
        w: '100%',
        mx: 'auto',
      },
    },
  },
  fonts: {
    body: 'Poppins',
    heading: 'Poppins',
  },
  colors: {
    gray: {
      '50': '#FAFAFA',
    },
  },
} as Theme | Record<string, unknown>);
