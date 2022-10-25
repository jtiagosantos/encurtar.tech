import { Meta, StoryObj } from '@storybook/react';
import { AttachmentIcon } from '@chakra-ui/icons';
import { Button } from './Button';
import type { ButtonProps } from './types';

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    text: 'ENCURTAR URL',
  },
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {};

export const WithIcon: StoryObj<ButtonProps> = {
  name: 'With Icon',
  args: {
    text: 'ENCURTAR URL',
    leftIcon: <AttachmentIcon />,
  },
};

Default.parameters = {
  controls: {
    include: ['text'],
  },
};

WithIcon.parameters = {
  controls: {
    include: ['text'],
  },
};
