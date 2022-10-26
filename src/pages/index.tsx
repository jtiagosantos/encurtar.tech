import { GetServerSideProps } from 'next';
import { useState } from 'react';
import { Flex, Box, FormControl, useToast } from '@chakra-ui/react';
import {
  AttachmentIcon,
  CopyIcon,
  ExternalLinkIcon,
  LinkIcon,
} from '@chakra-ui/icons';

//libs
import { redis } from '@/libs';

//services
import { shortenerURLService, getShortenedURLCountService } from '@/services';

//hooks
import { useWebShare } from '@/hooks';

//utils
import { formatNumber } from '@/utils';

//components
import { StatCard, Button, TextInput, Text, Heading } from '@/components';

//constants
import { REDIS_KEYS } from '@/constants';

type HomeProps = {
  access_count: string;
  shortened_url_count: string;
};

export default function Home({ access_count, shortened_url_count }: HomeProps) {
  const toast = useToast();
  const { share } = useWebShare();
  const [url, setUrl] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');
  const [shortenedUrlCount, setShortenedUrlCount] =
    useState(shortened_url_count);
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

    const shortenedUrlCount = await getShortenedURLCountService();
    setShortenedUrlCount(formatNumber(shortenedUrlCount));
  };

  const handleShortenAnotherURL = () => {
    setUrl('');
    setShortenedUrl('');
    setError('');
  };

  const handleCopyShortenedURLToClipboard = () => {
    navigator.clipboard.writeText(shortenedUrl);
    toast({
      description: 'Link copiado para a área de transferência',
      duration: 3000,
      isClosable: true,
    });
  };

  const handleShareShortenedURL = async () => {
    await share({
      title: 'URL encurtada',
      text: shortenedUrl,
    });
  };

  return (
    <>
      <Flex as="header" flexDir="column" align="center">
        <Heading
          as="h1"
          size="3xl"
          fontFamily="Fredoka One"
          color="purple.800"
          pt="32px"
          fontWeight="400">
          encurtar.tech
        </Heading>
        <Text as="h2" size="sm" textAlign="center" mt={1}>
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
              <FormControl as="form" isInvalid={!!error}>
                <TextInput.Root>
                  <TextInput.Label text="URL para encurtar" />
                  <TextInput.Field
                    type="text"
                    placeholder="https://..."
                    value={url}
                    onChange={({ target }) => setUrl(target.value)}
                  />
                  <TextInput.Error error={error} />
                </TextInput.Root>
              </FormControl>
              <Button
                text={loading ? 'ENCURTANDO...' : 'ENCURTAR URL'}
                w="200px"
                leftIcon={!loading ? <AttachmentIcon /> : undefined}
                ml="16px"
                px="64px"
                sx={{
                  '@media (max-width: 600px)': {
                    w: '100%',
                    ml: 0,
                    mt: error ? '32px' : '16px',
                  },
                }}
                onClick={handleShortenURL}
              />
            </Flex>
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
                text="COPIAR LINK"
                leftIcon={<CopyIcon />}
                flex={1}
                onClick={handleCopyShortenedURLToClipboard}
                sx={{
                  '@media (max-width: 800px)': {
                    py: '16px',
                  },
                }}
              />
              <Button
                text="COMPARTILHAR LINK"
                leftIcon={<ExternalLinkIcon />}
                flex={1}
                onClick={handleShareShortenedURL}
                sx={{
                  '@media (max-width: 800px)': {
                    py: '16px',
                  },
                }}
              />
              <Button
                text="ENCURTAR OUTRA URL"
                leftIcon={<LinkIcon />}
                flex={1}
                onClick={handleShortenAnotherURL}
                sx={{
                  '@media (max-width: 800px)': {
                    py: '16px',
                  },
                }}
              />
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
          <StatCard.Root>
            <StatCard.Label value="Acessos" />
            <StatCard.Value value={access_count} />
          </StatCard.Root>
          <StatCard.Root>
            <StatCard.Label value="URLs encurtadas" />
            <StatCard.Value value={shortenedUrlCount || '0'} />
          </StatCard.Root>
        </Flex>
      </Box>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const access_count = await redis.incr(REDIS_KEYS.ACCESS_COUNT);
  const shortened_url_count = await redis.get(REDIS_KEYS.SHORTENED_URL_COUNT);

  return {
    props: {
      access_count: formatNumber(access_count),
      shortened_url_count: formatNumber(Number(shortened_url_count)),
    },
  };
};
