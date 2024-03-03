import { Router } from 'express';
import { USER_ROLE } from '../../types/index.type';
import auth from '../../middlewares/auth';
import ValidateRequest from '../../middlewares/validateRequest';
import { RequestBalance } from './request_balance.validation';
import { RequestBalanceController } from './request_balance.controller';

const router = Router();

// create a balance request
router.post(
  '/create_request_balance',
  auth(USER_ROLE.user, USER_ROLE.superAdmin),
  ValidateRequest(RequestBalance.requestBalancePostValidationSchema),
  RequestBalanceController.createBalanceRequest,
);
// update a balance request
router.patch(
  '/update_balance_request_status/:id',
  auth(USER_ROLE.superAdmin),
  ValidateRequest(RequestBalance.requestBalanceUpdateValidationSchema),
  RequestBalanceController.updateBalanceRequest,
);

// get all request balance

router.get(
  '/get_all_balance_request',
  auth(USER_ROLE.superAdmin),
  RequestBalanceController.getAllBalanceRequest,
);
// get all request by user balance

router.get(
  '/get_all_balance_request_by_user/:email',
  auth(USER_ROLE.superAdmin, USER_ROLE.user),
  RequestBalanceController.getAllBalanceRequestByUser,
);

export const BalanceRequestRouter = router;
