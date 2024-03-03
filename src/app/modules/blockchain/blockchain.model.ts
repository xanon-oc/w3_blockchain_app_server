import { Schema, model } from 'mongoose';
import { TBlockchain } from './blockchain.interface';

const BlockchainValidationSchema = new Schema<TBlockchain>(
  {
    name: { type: String, required: true, unique: true },
    photo: { type: String, required: true },
  },
  { timestamps: true, versionKey: false },
);

export const Blockchain = model<TBlockchain>(
  'Blockchain',
  BlockchainValidationSchema,
);
