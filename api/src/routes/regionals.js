import express from 'express';
import { regionalAndState, regionalById, regionalIndex } from '../controllers/regionals.js';

const regionalRouter = express.Router();

regionalRouter.get('/regionals', regionalIndex);

regionalRouter.get('/regionals/:id', regionalById);

regionalRouter.get('/regionals-with-state', regionalAndState);


export default regionalRouter;
