import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { mainRouter } from './routers/main.router.js';
import cors from 'cors';
import cookieParser from  'cookie-parser';

if (process.env.NODE_ENV === "development") {
    dotenv.config({ path: "./.env.development" });
} else if (process.env.NODE_ENV === "production") {
    dotenv.config({ path: "./.env.production" });
}

const app = express();
app.use(cookieParser());
mongoose.connect('mongodb://127.0.0.1:27017/techprimelab').then(() => {
    console.log('MongoDB is connected with Node Application 👍');
}).catch((e) => {
    console.log('MongoDB is failed to connect with Node Application 👎 :' + e);
});
app.use(cors({ origin: ['http://localhost:3000'] }));
app.use(express.json());
app.use("/api", mainRouter);
export default app;