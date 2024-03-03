import { z } from 'zod';

const BlockchainPostValidation = z.object({
  body: z.object({
    name: z.string(),
    photo: z.string(),
  }),
});

export const BlockchainValidation = {
  BlockchainPostValidation,
};
