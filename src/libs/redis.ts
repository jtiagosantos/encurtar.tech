import Redis from 'ioredis';

//constans
import { UPSTASH_REDIS_URL } from '@/constants';

export const redis = new Redis(UPSTASH_REDIS_URL);
