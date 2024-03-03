import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { BlockchainServices } from './blockchain.service';

// create blockchain
const createBlockchain = catchAsync(async (req, res) => {
  const result = await BlockchainServices.createBlockchainIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Blockchain created successfully!',
    data: result,
  });
});

// delete blockchain

const deleteBlockchain = catchAsync(async (req, res) => {
  const result = await BlockchainServices.deleteBlockchainIntoDB(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blockchain deleted successfully!',
    data: result,
  });
});
// get all blockchain

const getAllBlockchain = catchAsync(async (req, res) => {
  const result = await BlockchainServices.getAllBlockchainIntoDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All blockchain retrieved successfully!',
    data: result,
  });
});

export const BlockchainController = {
  createBlockchain,
  deleteBlockchain,
  getAllBlockchain,
};
