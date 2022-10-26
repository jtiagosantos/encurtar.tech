import { Meta, StoryObj } from '@storybook/react';
import { StatCard } from './StatCard';
import type { StatCardRootProps } from './types';

export default {
  title: 'Components/StatCard',
  component: StatCard.Root,
  args: {
    children: [
      <StatCard.Label value="Acessos" />,
      <StatCard.Value value="9999" />,
    ],
  },
} as Meta<StatCardRootProps>;

export const Default: StoryObj<StatCardRootProps> = {};

Default.parameters = {
  controls: {
    include: [],
  },
};
