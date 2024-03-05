/* eslint-disable @typescript-eslint/no-explicit-any */

import { Model } from 'mongoose';

/* eslint-disable no-unused-vars */
export type TBlockchain = {
  name: string;
  photo: string;
  network: 'TestNet' | 'ETH';
};

export interface BlockchainModal extends Model<TBlockchain> {
  //instance methods for checking if the blockchain exist
  isBlockchainExists(id: any): Promise<TBlockchain>;
}
