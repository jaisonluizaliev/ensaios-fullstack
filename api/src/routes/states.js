import express from 'express';
import { stateIndex, stateById } from '../controllers/states.js';

const stateRouter = express.Router();

stateRouter.get('/states', stateIndex);

stateRouter.get('/states/:id', stateById);


export default stateRouter;
