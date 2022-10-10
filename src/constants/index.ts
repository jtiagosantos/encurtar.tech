export const SHORTENER_API_URL = process.env
  .NEXT_PUBLIC_SHORTENER_API_URL as string;

export const UPSTASH_REDIS_URL = process.env
  .NEXT_PUBLIC_UPSTASH_REDIS_URL as string;

export const REDIS_KEYS =
  process.env.NODE_ENV === 'development'
    ? {
        ACCESS_COUNT: 'access_count_dev',
        SHORTENED_URL_COUNT: 'shortened_url_count_dev',
      }
    : {
        ACCESS_COUNT: 'access_count',
        SHORTENED_URL_COUNT: 'shortened_url_count',
      };
