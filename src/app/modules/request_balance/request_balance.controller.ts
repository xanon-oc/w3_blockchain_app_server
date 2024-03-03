import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { RequestBalanceService } from './request_balance.service';

// create request balance
const createBalanceRequest = catchAsync(async (req, res) => {
  const result = await RequestBalanceService.createRequestBalanceIntoDB(
    req.body,
  );
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Balance request send successfully!',
    data: result,
  });
});

// update request balance
const updateBalanceRequest = catchAsync(async (req, res) => {
  const payload = { id: req.params.id, request_status: req.body };
  const result =
    await RequestBalanceService.updateRequestBalanceIntoDB(payload);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Balance request status updated successfully!',
    data: result,
  });
});

// get all request balance
const getAllBalanceRequest = catchAsync(async (req, res) => {
  const result = await RequestBalanceService.getAllRequestBalanceIntoDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Balance requests fetched successfully!',
    data: result,
  });
});

// get all by user request balance
const getAllBalanceRequestByUser = catchAsync(async (req, res) => {
  const result = await RequestBalanceService.getAllRequestByUserBalanceIntoDB(
    req.params.email,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Balance requests fetched successfully!',
    data: result,
  });
});

export const RequestBalanceController = {
  createBalanceRequest,
  updateBalanceRequest,
  getAllBalanceRequest,
  getAllBalanceRequestByUser,
};
