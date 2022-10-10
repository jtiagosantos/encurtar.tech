//configs
import { api } from '@/configs';

//constants
import { SHORTENER_API_URL } from '@/constants';

//types
import { ServiceResponse } from '@/types';

interface ShortenerURLServiceRequest {
  url: string;
}

export const shortenerURLService = async ({
  url,
}: ShortenerURLServiceRequest): Promise<ServiceResponse<string>> => {
  const response = await api.get<{ shorturl?: string }>(
    `${SHORTENER_API_URL}=${url}`,
  );

  if (response.data?.shorturl) {
    return {
      data: response.data.shorturl,
      error: null,
    };
  }

  return {
    data: null,
    error: 'Informe uma URL válida',
  };
};
