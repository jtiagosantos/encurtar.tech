import { NextApiRequest, NextApiResponse } from 'next';

//libs
import { redis } from '@/libs';

//constants
import { REDIS_KEYS } from '@/constants';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const { method } = request;

  if (method !== 'POST') {
    return response.status(404).json({ message: 'Route not found' });
  }

  const shortened_url_count = await redis.incr(REDIS_KEYS.SHORTENED_URL_COUNT);

  response.status(200).json({ shortened_url_count });
}
