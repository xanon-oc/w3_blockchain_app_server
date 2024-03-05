/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
import { Model, Types } from 'mongoose';

export type TRequestBalance = {
  user_email: string;
  blockchain_id: Types.ObjectId;
  wallet_address: string;
  request_type: '20 Test Link';
  requested_balance: number;
  request_status: 'approved' | 'pending';
};

export interface RequestBalanceModal extends Model<TRequestBalance> {
  //instance methods for checking if the blockchain exist
  isBalanceRequestIdExists(id: any): Promise<TRequestBalance>;
}
