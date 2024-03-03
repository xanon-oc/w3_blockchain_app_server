import { Schema, model } from 'mongoose';
import { BlockchainModal, TBlockchain } from './blockchain.interface';

const BlockchainValidationSchema = new Schema<TBlockchain, BlockchainModal>(
  {
    name: { type: String, required: true, unique: true },
    photo: { type: String, required: true },
  },
  { timestamps: true, versionKey: false },
);
// is blockchain exists checking
BlockchainValidationSchema.statics.isBlockchainExists = async function name(
  id: any,
) {
  return await Blockchain.findById(id);
};

export const Blockchain = model<TBlockchain, BlockchainModal>(
  'Blockchain',
  BlockchainValidationSchema,
);
