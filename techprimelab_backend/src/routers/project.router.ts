import  express  from "express";
import { ProjectController } from "../controllers/project.controller.js";
export const projectRouter = express();
const projectController = new ProjectController();

projectRouter.post('/', projectController.createProject);