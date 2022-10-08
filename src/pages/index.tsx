/* eslint-disable no-constant-condition */
import {
  Flex,
  Box,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
} from '@chakra-ui/react';
import {
  AttachmentIcon,
  CopyIcon,
  ExternalLinkIcon,
  LinkIcon,
} from '@chakra-ui/icons';

export default function Home() {
  return (
    <>
      <Flex as="header" flexDir="column" align="center">
        <Text
          as="h1"
          fontSize="3rem"
          color="purple.800"
          fontFamily="Fredoka One"
          pt={5}>
          encurtar.url
        </Text>
        <Text as="h2" textAlign="center">
          encurte seus links de forma rápida, simples e segura
        </Text>
      </Flex>

      <Box as="main" mt="84px" maxW="900px" mx="auto">
        {true ? (
          <Flex
            as="section"
            w="100%"
            align="flex-end"
            sx={{
              '@media (max-width: 600px)': {
                flexDir: 'column',
                align: 'center',
              },
            }}>
            <FormControl>
              <FormLabel fontSize="1.3rem">URL para encurtar</FormLabel>
              <Input
                type="text"
                placeholder="https://..."
                size="lg"
                focusBorderColor="purple.800"
              />
            </FormControl>
            <Button
              w="200px"
              leftIcon={<AttachmentIcon />}
              size="lg"
              ml="16px"
              px="64px"
              bg="purple.700"
              color="white"
              _hover={{ opacity: 0.8 }}
              sx={{
                '@media (max-width: 600px)': {
                  w: '100%',
                  ml: 0,
                  mt: '16px',
                },
              }}>
              ENCURTAR URL
            </Button>
          </Flex>
        ) : (
          <Box as="section" w="100%">
            <Text
              fontSize="1.5rem"
              textAlign="center"
              borderColor="purple.800"
              borderWidth="2px"
              borderStyle="dashed"
              borderRadius="6px"
              color="gray.600"
              py={3}>
              l1nq.com/GB3X2
            </Text>
            <Flex
              w="100%"
              mt="24px"
              gap="16px"
              sx={{
                '@media (max-width: 800px)': {
                  flexDir: 'column',
                },
              }}>
              <Button
                leftIcon={<CopyIcon />}
                size="lg"
                bg="purple.700"
                color="white"
                _hover={{ opacity: 0.8 }}
                flex={1}
                sx={{
                  '@media (max-width: 800px)': {
                    py: '16px',
                  },
                }}>
                COPIAR LINK
              </Button>
              <Button
                leftIcon={<ExternalLinkIcon />}
                size="lg"
                bg="purple.700"
                color="white"
                _hover={{ opacity: 0.8 }}
                flex={1}
                sx={{
                  '@media (max-width: 800px)': {
                    py: '16px',
                  },
                }}>
                COMPARTILHAR LINK
              </Button>
              <Button
                leftIcon={<LinkIcon />}
                size="lg"
                bg="purple.700"
                color="white"
                _hover={{ opacity: 0.8 }}
                flex={1}
                sx={{
                  '@media (max-width: 800px)': {
                    py: '16px',
                  },
                }}>
                ENCURTAR OUTRA URL
              </Button>
            </Flex>
          </Box>
        )}

        <Flex
          as="section"
          w="100%"
          mt="100px"
          gap="24px"
          sx={{
            '@media (max-width: 800px)': {
              flexDir: 'column',
            },
          }}>
          <Flex
            boxShadow="1px 1px 8px -4px gray"
            p="28px"
            borderRadius="6px"
            flex={1}
            align="center"
            justify="space-between"
            borderLeftColor="purple.800"
            borderLeftWidth="8px">
            <Text fontSize="0.9rem">Acessos</Text>
            <Text fontSize="1.2rem">999.999</Text>
          </Flex>
          <Flex
            boxShadow="1px 1px 8px -4px gray"
            p="28px"
            borderRadius="6px"
            flex={1}
            align="center"
            justify="space-between"
            borderLeftColor="purple.800"
            borderLeftWidth="8px">
            <Text fontSize="0.9rem">URLs encurtadas</Text>
            <Text fontSize="1.2rem">999</Text>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
