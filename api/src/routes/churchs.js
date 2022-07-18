import express from 'express';
import { churchById, churchIndex } from '../controllers/churchs.js';

const churchsRouter = express.Router();

churchsRouter.get('/churchs', churchIndex );

churchsRouter.get('/churchs/:id', churchById);

// churchsRouter.get('/churchs', );

export default churchsRouter;
