import express from 'express';
import cors from 'cors';

import routes from './routes/index.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/products', routes.Products);
app.use('/clients', routes.Clients);
app.use('/orders', routes.Orders);

export default app;
