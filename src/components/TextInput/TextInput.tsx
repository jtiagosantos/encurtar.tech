import { FormLabel, Input, Text } from '@chakra-ui/react';

//types
import type {
  TextInputRootProps,
  TextInputLabelProps,
  TextInputFieldProps,
  TextInputErrorProps,
} from './types';

const TextInputRoot: TextInputRootProps = ({ children }) => <>{children}</>;

const TextInputLabel: TextInputLabelProps = ({ text, ...props }) => {
  return (
    <FormLabel fontSize="1.3rem" {...props}>
      {text}
    </FormLabel>
  );
};

const TextInputField: TextInputFieldProps = ({ ...props }) => {
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

const TextInputError: TextInputErrorProps = ({ error, ...props }) => {
  return (
    <Text fontSize="0.9rem" color="red.500" mt="5px" pos="absolute" {...props}>
      {error}
    </Text>
  );
};

export const TextInput = {
  Root: TextInputRoot,
  Label: TextInputLabel,
  Field: TextInputField,
  Error: TextInputError,
};
