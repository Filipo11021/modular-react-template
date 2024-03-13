import { useQuery } from '@tanstack/react-query';
import { z } from 'zod';

const randomQuoteSchema = z.object({
  _id: z.string(),
  content: z.string(),
  author: z.string(),
});

const randomQuoteSuccessResponseSchema = z
  .array(randomQuoteSchema)
  .transform((data) => data[0]);

async function randomQuoteQueryFn() {
  const res = await fetch('https://api.quotable.io/quotes/random');
  const data = (await res.json()) as unknown;

  return randomQuoteSuccessResponseSchema.parse(data);
}

export function useRandomQuoteQuery() {
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ['welcome-view-random-quote'],
    queryFn: randomQuoteQueryFn,
  });

  return { data, isLoading, error, isError };
}
