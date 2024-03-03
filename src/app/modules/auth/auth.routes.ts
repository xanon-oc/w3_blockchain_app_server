import { Router } from 'express';
import { AuthControllers } from './auth.controller';
import ValidateRequest from '../../middlewares/validateRequest';
import { AuthValidation } from './auth.validation';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../../types/index.type';

const router = Router();

// create a user
router.post(
  '/register',
  ValidateRequest(AuthValidation.AuthRegisterSchemaValidation),
  AuthControllers.createAUser,
);
// login a user
router.post(
  '/login',
  ValidateRequest(AuthValidation.AuthLoginSchemaValidation),
  AuthControllers.loginAUser,
);

router.post(
  '/refresh-token',
  // ValidateRequest(AuthValidation.refreshTokenValidationSchema),
  AuthControllers.refreshToken,
);
router.get(
  '/get_all_users',
  auth(USER_ROLE.superAdmin),
  AuthControllers.getUsers,
);

export const AuthRoutes = router;
