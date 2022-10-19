import { FC, PropsWithChildren } from 'react';
import { FlexProps, TextProps } from '@chakra-ui/react';

export type StatCardRootProps = FC<PropsWithChildren<FlexProps>>;

export type StatCardLabelProps = FC<
  TextProps & {
    value: string;
  }
>;

export type StatCardValueProps = FC<
  TextProps & {
    value: string;
  }
>;
