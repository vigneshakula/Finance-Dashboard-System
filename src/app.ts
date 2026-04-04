import express from 'express';
import authRoutes from './routes/auth.routes';
import recordRoutes from './routes/record.routes'
import userRoutes from './routes/user.routes';
import dashboardRoutes from './routes/dashboard.routes';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './config/swagger';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/record', recordRoutes);
app.use("/api/v1/user",userRoutes);
app.use("/api/v1/dashboard",dashboardRoutes);


export default app;