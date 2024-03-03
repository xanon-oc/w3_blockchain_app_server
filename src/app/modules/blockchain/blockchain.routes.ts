import { Router } from 'express';
import ValidateRequest from '../../middlewares/validateRequest';
import { BlockchainValidation } from './blockchain.validation';
import { BlockchainController } from './blockchain.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../../types/index.type';

const router = Router();

// create a user
router.post(
  '/create_blockchain',
  auth(USER_ROLE.superAdmin),
  ValidateRequest(BlockchainValidation.BlockchainPostValidation),
  BlockchainController.createBlockchain,
);

// delete blockchain by id
router.delete(
  '/delete_blockchain/:id',
  auth(USER_ROLE.superAdmin),
  BlockchainController.deleteBlockchain,
);
// get all blockchain
router.get(
  '/get_all_blockchain',
  auth(USER_ROLE.superAdmin, USER_ROLE.user),
  BlockchainController.getAllBlockchain,
);

export const BlockchainRouter = router;
