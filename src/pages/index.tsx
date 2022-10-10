import { useState } from 'react';
import {
  Flex,
  Box,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast,
} from '@chakra-ui/react';
import {
  AttachmentIcon,
  CopyIcon,
  ExternalLinkIcon,
  LinkIcon,
} from '@chakra-ui/icons';

//services
import { shortenerURLService } from '@/services';

export default function Home() {
  const toast = useToast();
  const [url, setUrl] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleShortenURL = async () => {
    if (!url) {
      return setError('Informe uma URL');
    }

    setLoading(true);

    const { data, error } = await shortenerURLService({ url });

    if (error) {
      setLoading(false);
      return setError(error);
    }

    setLoading(false);
    setShortenedUrl(data || '');
  };

  const handleShortenAnotherURL = () => {
    setUrl('');
    setShortenedUrl('');
  };

  const handleCopyShortenedURLToClipboard = () => {
    navigator.clipboard.writeText(shortenedUrl);
    toast({
      description: 'Link copiado para a área de transferência',
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <>
      <Flex as="header" flexDir="column" align="center">
        <Text
          as="h1"
          fontSize="3rem"
          color="purple.800"
          fontFamily="Fredoka One"
          pt={5}>
          encurtar.tech
        </Text>
        <Text as="h2" textAlign="center">
          encurte seus links de forma rápida, simples e segura
        </Text>
      </Flex>

      <Box as="main" mt="84px" maxW="900px" mx="auto">
        {!shortenedUrl ? (
          <>
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
              <FormControl isInvalid={!!error}>
                <FormLabel fontSize="1.3rem">URL para encurtar</FormLabel>
                <Input
                  type="text"
                  placeholder="https://..."
                  size="lg"
                  focusBorderColor="purple.800"
                  value={url}
                  onChange={({ target }) => setUrl(target.value)}
                  autoComplete="off"
                  autoCapitalize="none"
                  autoCorrect="none"
                />
              </FormControl>
              <Text
                w="100%"
                fontSize="0.9rem"
                color="red.500"
                mt="5px"
                sx={{
                  '@media (max-width: 600px)': {
                    display: 'block',
                  },
                  '@media (min-width: 601px)': {
                    display: 'none',
                  },
                }}>
                {error}
              </Text>
              <Button
                w="200px"
                leftIcon={!loading ? <AttachmentIcon /> : undefined}
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
                }}
                onClick={handleShortenURL}>
                {loading ? 'ENCURTANDO...' : 'ENCURTAR URL'}
              </Button>
            </Flex>
            <Text
              fontSize="0.9rem"
              color="red.500"
              mt="5px"
              sx={{
                '@media (max-width: 600px)': {
                  display: 'none',
                },
              }}>
              {error}
            </Text>
          </>
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
              {shortenedUrl}
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
                onClick={handleCopyShortenedURLToClipboard}
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
                onClick={handleShortenAnotherURL}
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
