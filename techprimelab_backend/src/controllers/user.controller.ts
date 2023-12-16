import { NextFunction, Request, Response } from "express";
import { IUser } from "../interface/user.interface.js";
import { UserService } from "../services/user.service.js";

export class UserController {
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    loginUser = async (req: Request, res: Response, next: NextFunction) => {
        const user: IUser = req.body;
        console.log(user);
        const userData = await this.userService.userLogin(user);
        console.log(userData);
        if(userData == null){
            res.status(404).json({status:'InValid User'});
        }else{
            res.status(200).json({status:'Valid User'});
        }    
    }
}

