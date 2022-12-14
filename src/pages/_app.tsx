import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

//theme
import { theme } from '@/styles/theme';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
