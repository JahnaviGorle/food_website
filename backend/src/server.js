import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import foodRouter from './routers/food.router.js';
import userRouter from './routers/user.router.js';

import { dbconnect } from './config/database.config.js';
dbconnect();


const app = express();
app.use(express.json());
// Allow CORS from the React app
app.use(cors({
  origin: 'http://localhost:3000', // Allow requests only from this origin
  credentials: true, // Allow cookies to be sent along with requests
}));

app.use('/api/foods', foodRouter);
app.use('/api/users', userRouter);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
