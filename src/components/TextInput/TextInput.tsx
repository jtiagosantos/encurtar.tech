import { FC } from 'react';
import { FormLabel, Input, Text } from '@chakra-ui/react';

//types
import type {
  TextInputRootProps,
  TextInputLabelProps,
  TextInputFieldProps,
  TextInputErrorProps,
} from './types';

const TextInputRoot: FC<TextInputRootProps> = ({ children }) => <>{children}</>;

const TextInputLabel: FC<TextInputLabelProps> = ({ text, ...props }) => {
  return (
    <FormLabel fontSize="1.3rem" {...props}>
      {text}
    </FormLabel>
  );
};

const TextInputField: FC<TextInputFieldProps> = ({ ...props }) => {
  return (
    <Input
      size="lg"
      focusBorderColor="purple.800"
      autoComplete="off"
      autoCapitalize="none"
      autoCorrect="none"
      {...props}
    />
  );
};

const TextInputError: FC<TextInputErrorProps> = ({ error, ...props }) => {
  return (
    <Text fontSize="0.9rem" color="red.500" mt="5px" pos="absolute" {...props}>
      {error}
    </Text>
  );
};

TextInputRoot.displayName = 'TextInput.Root';
TextInputLabel.displayName = 'TextInput.Label';
TextInputField.displayName = 'TextInput.Field';
TextInputError.displayName = 'TextInput.Error';

export const TextInput = {
  Root: TextInputRoot,
  Label: TextInputLabel,
  Field: TextInputField,
  Error: TextInputError,
};
