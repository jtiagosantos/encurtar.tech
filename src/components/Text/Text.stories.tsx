import { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';
import type { TextProps } from './types';

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'encurte seus links de forma rápida, simples e segura',
    size: 'sm',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', 'xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>;

export const Default: StoryObj<TextProps> = {};

export const Md: StoryObj<TextProps> = {
  args: {
    size: 'md',
  },
};

export const Lg: StoryObj<TextProps> = {
  args: {
    size: 'lg',
  },
};

export const Xl: StoryObj<TextProps> = {
  args: {
    size: 'xl',
  },
};

const variants = [Default, Md, Lg, Xl];

for (const variant of variants) {
  variant.parameters = {
    controls: {
      include: ['children', 'size'],
    },
  };
}
