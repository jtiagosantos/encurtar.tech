import { Meta, StoryObj } from '@storybook/react';
import { TextInput } from './TextInput';
import type { TextInputRootProps } from './types';

export default {
  title: 'Components/TextInput',
  component: TextInput.Root,
  args: {
    children: [
      <TextInput.Label text="URL para encurtar" />,
      <TextInput.Field placeholder="https://..." />,
    ],
  },
} as Meta<TextInputRootProps>;

export const Default: StoryObj<TextInputRootProps> = {};

export const WithError: StoryObj<TextInputRootProps> = {
  name: 'With Error',
  args: {
    children: [
      <TextInput.Label text="URL para encurtar" />,
      <TextInput.Field placeholder="https://..." isInvalid={true} />,
      <TextInput.Error error="Informe uma URL válida" />,
    ],
  },
};

Default.parameters = {
  controls: {
    include: [],
  },
};

WithError.parameters = {
  controls: {
    include: [],
  },
};
