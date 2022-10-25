import { FormLabelProps, InputProps, TextProps } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

export type TextInputRootProps = PropsWithChildren<unknown>;

export type TextInputLabelProps = FormLabelProps & {
  text: string;
};

export type TextInputFieldProps = InputProps;

export type TextInputErrorProps = TextProps & {
  error: string;
};
