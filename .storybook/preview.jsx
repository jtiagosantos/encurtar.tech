import { themes } from '@storybook/theming';
import { ChakraProvider, theme } from '@chakra-ui/react';

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
  chakra: {
    theme,
  },
};
