import { IProject } from '../interface/project.interface.js';
import Project from '../models/project.model.js';
import { UserService } from './user.service.js';
export class ProjectService{
    constructor() {}
    
    public async  createProject(project: IProject) {
        return new Project(project).save()
    }
}