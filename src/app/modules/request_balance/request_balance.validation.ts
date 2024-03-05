import { z } from 'zod';

const requestBalancePostValidationSchema = z.object({
  body: z.object({
    user_email: z.string(),
    blockchain_id: z.string(),
    wallet_address: z.string(),
    requested_balance: z.number(),
  }),
});
const requestBalanceUpdateValidationSchema = z.object({
  body: z.object({
    request_status: z.enum(['approved', 'pending']),
  }),
});

export const RequestBalance = {
  requestBalancePostValidationSchema,
  requestBalanceUpdateValidationSchema,
};
