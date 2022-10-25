import { themes } from '@storybook/theming';
import { ChakraProvider } from '@chakra-ui/react';

import { theme } from '../src/styles/theme';

export const decorators = [
  (Story) => (
    <ChakraProvider theme={theme}>
      {Story()}
    </ChakraProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: themes.dark,
  },
};
