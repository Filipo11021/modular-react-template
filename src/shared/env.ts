import { z } from 'zod';

export const env = z
  .object({
    BASE_URL: z.string(),
    MODE: z.string(),
    DEV: z.boolean(),
    PROD: z.boolean(),
    SSR: z.boolean(),
  })
  .parse(import.meta.env);
