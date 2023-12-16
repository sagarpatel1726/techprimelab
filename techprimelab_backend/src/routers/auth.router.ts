import  express  from "express";
import { UserController } from "../controllers/user.controller.js";
export const userRouter = express();
const userController = new UserController();

userRouter.post('/', userController.loginUser);