import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { mainRouter } from './routers/main.router.js';
import cors from 'cors';
dotenv.config({ path: `./.env.${process.env.NODE_ENV}`});
const app = express();
mongoose.connect('mongodb://127.0.0.1:27017/techprimelab').then(() => {
    console.log('MongoDB is connected with Node Application 👍');
}).catch((e) => {
    console.log('MongoDB is failed to connect with Node Application 👎 :' + e);
});
app.use(cors({origin: ['http://localhost:3000']}));
app.use(express.json());
app.use("/api", mainRouter);
export default app;