import { PropsWithChildren } from 'react';
import { FlexProps, TextProps } from '@chakra-ui/react';

export type StatCardRootProps = PropsWithChildren<FlexProps>;

export type StatCardLabelProps = TextProps & {
  value: string;
};

export type StatCardValueProps = TextProps & {
  value: string;
};
