import express from 'express';
import { sectorById, sectorIndex } from '../controllers/sectors.js';

const sectorRoutes = express.Router();

sectorRoutes.get('/sectors', sectorIndex);
sectorRoutes.get('/sectors/:id', sectorById);

export default sectorRoutes;
