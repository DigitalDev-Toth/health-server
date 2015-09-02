import express from 'express';
let router = express.Router();

/*
 * Sub Routes
 */
import info from './info'
router.use('/info', info);

import server from './server'
router.use('/server', server);

export default router;