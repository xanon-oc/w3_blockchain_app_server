import { z } from 'zod';

const BlockchainPostValidation = z.object({
  body: z.object({
    name: z.string(),
    photo: z.string(),
    network: z.enum(['TestNet', 'ETH']).default('TestNet'),
  }),
});

export const BlockchainValidation = {
  BlockchainPostValidation,
};
