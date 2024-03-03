import { Schema, model } from 'mongoose';
import {
  RequestBalanceModal,
  TRequestBalance,
} from './request_balance.interface';

const RequestBalanceSchema = new Schema<TRequestBalance, RequestBalanceModal>(
  {
    user_email: { type: String, required: true },
    blockchain_id: { type: Schema.Types.ObjectId, ref: 'Blockchain' },
    wallet_address: { type: String, required: true },
    request_type: {
      type: String,
      required: true,
      enum: ['20 Test Link'],
      default: '20 Test Link',
    },
    requested_balance: { type: Number, required: true },
    request_status: {
      type: String,
      required: true,
      enum: ['approved', 'declined', 'pending'],
      default: 'pending',
    },
  },
  { timestamps: true },
);

// is balance request id exists checking
RequestBalanceSchema.statics.isBalanceRequestIdExists = async function name(
  id: any,
) {
  return await BalanceRequest.findById(id);
};

export const BalanceRequest = model<TRequestBalance, RequestBalanceModal>(
  'RequestBalance',
  RequestBalanceSchema,
);
