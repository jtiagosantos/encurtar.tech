import { Flex, Text } from '@chakra-ui/react';

//types
import type {
  StatCardRootProps,
  StatCardLabelProps,
  StatCardValueProps,
} from './types';

const StatCardRoot: StatCardRootProps = ({ children, ...props }) => {
  return (
    <Flex
      boxShadow="1px 1px 8px -4px gray"
      p="28px"
      borderRadius="6px"
      flex={1}
      align="center"
      justify="space-between"
      borderLeftColor="purple.800"
      borderLeftWidth="8px"
      {...props}>
      {children}
    </Flex>
  );
};

const StatCardLabel: StatCardLabelProps = ({ value, ...props }) => (
  <Text fontSize="0.9rem" {...props}>
    {value}
  </Text>
);

const StatCardValue: StatCardValueProps = ({ value, ...props }) => (
  <Text fontSize="1.2rem" {...props}>
    {value}
  </Text>
);

export const StatCard = {
  Root: StatCardRoot,
  Label: StatCardLabel,
  Value: StatCardValue,
};
