import { NextFunction, Request, Response } from "express";
import { IProject } from "../interface/project.interface.js";
import { ProjectService } from '../services/project.service.js';

export class ProjectController {
    private projectService: ProjectService;

    constructor() {
        this.projectService = new ProjectService();
    }

    public createProject = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const project: IProject = req.body;
            const projectDetails = await this.projectService.createProject(project)
            res.status(201).json({ data: projectDetails, message: 'Project created successfully.' });

        } catch (error: any) {
            res.status(500).json({ error: error });
        }
    }
}