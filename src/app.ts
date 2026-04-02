import express from 'express';
import authRoutes from './routes/auth.routes';
import recordRoutes from './routes/record.routes'
const app = express();

app.use(express.json());


app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/record', recordRoutes);

export default app;