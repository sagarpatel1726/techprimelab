import express  from "express";
import { userRouter } from "./auth.router.js";
export const mainRouter = express.Router();

mainRouter.use('/auth', userRouter);
