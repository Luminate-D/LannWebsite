import { Router } from '../../router';

export const router = new Router('/status');
router.get('/', (req, res) => res.send({ alive: true }));
