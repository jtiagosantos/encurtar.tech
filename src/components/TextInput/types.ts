import { FormLabelProps, InputProps, TextProps } from '@chakra-ui/react';
import { FC, PropsWithChildren } from 'react';

export type TextInputRootProps = FC<PropsWithChildren<unknown>>;

export type TextInputLabelProps = FC<
  FormLabelProps & {
    text: string;
  }
>;

export type TextInputFieldProps = FC<InputProps>;

export type TextInputErrorProps = FC<
  TextProps & {
    error: string;
  }
>;
