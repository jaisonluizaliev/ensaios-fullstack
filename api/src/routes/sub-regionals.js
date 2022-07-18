import express from 'express';
import {
  subRegionalsById,
  subRegionalsIndex,
} from '../controllers/sub-regionals.js';

const subRegionalsRouter = express.Router();

subRegionalsRouter.get('/sub-regionals', subRegionalsIndex);

subRegionalsRouter.get('/sub-regionals/:id', subRegionalsById);

export default subRegionalsRouter;
