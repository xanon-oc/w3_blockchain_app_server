import { Router } from 'express';
import { AuthRoutes } from '../modules/auth/auth.routes';
import { BlockchainRouter } from '../modules/blockchain/blockchain.routes';
import { BalanceRequestRouter } from '../modules/request_balance/request_balance.routes';

const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/blockchain',
    route: BlockchainRouter,
  },
  {
    path: '/balance_request',
    route: BalanceRequestRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
