import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { User } from '../auth/auth.model';
import { TRequestBalance } from './request_balance.interface';
import { BalanceRequest } from './request_balance.model';
import { Blockchain } from '../blockchain/blockchain.model';

// create request balance
const createRequestBalanceIntoDB = async (payload: TRequestBalance) => {
  const isBlockchainExists = await Blockchain.isBlockchainExists(
    payload.blockchain_id,
  );
  if (!isBlockchainExists) {
    throw new AppError(httpStatus.NOT_FOUND, 'Blockchain dose not exists');
  }
  const result = await BalanceRequest.create(payload);
  return result;
};

// update request balance
const updateRequestBalanceIntoDB = async ({
  id,
  request_status,
}: {
  id: string;
  request_status: string;
}) => {
  const isBalanceRequestIdExists =
    await BalanceRequest.isBalanceRequestIdExists(id);

  if (!isBalanceRequestIdExists) {
    throw new AppError(httpStatus.NOT_FOUND, 'Requested balance id not found');
  }

  const result = await BalanceRequest.findByIdAndUpdate(
    id,
    request_status as Partial<TRequestBalance>,
    {
      new: true,
      runValidators: true,
    },
  );
  return result;
};

// get all request balance

const getAllRequestBalanceIntoDB = async () => {
  const result = await BalanceRequest.find();
  return result;
};

// get all by user request balance

const getAllRequestByUserBalanceIntoDB = async (email: string) => {
  const isUserExists = await User.isUserExists(email);
  if (!isUserExists) {
    throw new AppError(httpStatus.NOT_FOUND, 'User dose not exists');
  }

  const result = await BalanceRequest.find({ user_email: email }).populate(
    'blockchain_id',
  );
  return result;
};

export const RequestBalanceService = {
  createRequestBalanceIntoDB,
  updateRequestBalanceIntoDB,
  getAllRequestBalanceIntoDB,
  getAllRequestByUserBalanceIntoDB,
};
