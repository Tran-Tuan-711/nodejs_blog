import express from 'express';
import newsController from '../app/controller/NewsController.js';

const router = express.Router();

router.use('/:slug', newsController.showDetail);
router.use('/', newsController.index);

export const newsRoute = router;



