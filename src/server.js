import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';
import logger from './middleware/logger.js';
import errorHandler from './middleware/errorHandler.js';
import apiRoutes from './routes/index.js';

dotenv.config();

const app = express();

// Middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(logger);

// Routes
app.use('/api', apiRoutes);

// Error handler (colocado após as rotas)
app.use(errorHandler);

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
