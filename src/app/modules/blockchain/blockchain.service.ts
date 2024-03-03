import { TBlockchain } from './blockchain.interface';
import { Blockchain } from './blockchain.model';

// create blockchain
const createBlockchainIntoDB = async (payload: TBlockchain) => {
  const result = await Blockchain.create(payload);
  return result;
};
// delete blockchain
const deleteBlockchainIntoDB = async (id: string) => {
  const result = await Blockchain.findByIdAndDelete(id);
  return result;
};
// get all  blockchain
const getAllBlockchainIntoDB = async () => {
  const result = await Blockchain.find();
  return result;
};

export const BlockchainServices = {
  createBlockchainIntoDB,
  deleteBlockchainIntoDB,
  getAllBlockchainIntoDB,
};
