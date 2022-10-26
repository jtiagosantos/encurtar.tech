import { Meta, StoryObj } from '@storybook/react';
import { Heading } from './Heading';
import type { HeadingProps } from './types';

export default {
  title: 'Components/Heading',
  component: Heading,
  args: {
    children: 'encurtar.tech',
    size: 'xl',
  },
  argTypes: {
    size: {
      options: ['xl', '1xl', '2xl', '3xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<HeadingProps>;

export const Default: StoryObj<HeadingProps> = {};

export const OneXl: StoryObj<HeadingProps> = {
  name: '1xl',
  args: {
    size: '1xl',
  },
};

export const TwoXl: StoryObj<HeadingProps> = {
  name: '2xl',
  args: {
    size: '2xl',
  },
};

export const ThreeXl: StoryObj<HeadingProps> = {
  name: '3xl',
  args: {
    size: '3xl',
  },
};

const variants = [Default, OneXl, TwoXl, ThreeXl];

for (const variant of variants) {
  variant.parameters = {
    controls: {
      include: ['children', 'size'],
    },
  };
}
