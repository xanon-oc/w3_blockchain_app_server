import { Router } from 'express';
import { AuthRoutes } from '../modules/auth/auth.routes';
import { BlockchainRouter } from '../modules/blockchain/blockchain.routes';

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
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
