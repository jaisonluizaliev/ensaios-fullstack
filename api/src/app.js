import express from 'express';
import cors from 'cors';
import churchsRouter from './routes/churchs.js';
import router from './routes/index.js';
import regionalRouter from './routes/regionals.js';
import sectorRoutes from './routes/sectors.js';
import stateRouter from './routes/states.js';
import subRegionalsRouter from './routes/sub-regionals.js';

const app = express();

app.use(cors())
app.use(express.json());
app.use(router);
app.use(stateRouter);
app.use(regionalRouter);
app.use(subRegionalsRouter);
app.use(sectorRoutes);
app.use(churchsRouter);



const PORT = process.env.PORT || 3001;

app.listen(PORT, () =>
  console.log(`Server running on port http://localhost:${PORT}`)
);
