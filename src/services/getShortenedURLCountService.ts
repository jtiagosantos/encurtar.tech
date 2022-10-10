//configs
import { api } from '@/configs';

export const getShortenedURLCountService = async (): Promise<number> => {
  const response = await api.post<{ shortened_url_count: number }>(
    '/api/shortened_url_count',
  );

  return response.data.shortened_url_count;
};
