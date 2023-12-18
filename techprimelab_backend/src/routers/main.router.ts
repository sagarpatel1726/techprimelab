import express  from "express";
import { userRouter } from "./auth.router.js";
import { projectRouter } from "./project.router.js";
import { authorization } from "../middleware/authorization.middleware.js";
export const mainRouter = express.Router();

mainRouter.use('/auth', userRouter);
mainRouter.use('/project', authorization, projectRouter);
