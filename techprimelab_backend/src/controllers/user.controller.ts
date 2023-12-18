import { NextFunction, Request, Response } from "express";
import { IUser } from "../interface/user.interface.js";
import { userService, UserService } from "../services/user.service.js";

export class UserController {
    private userService: UserService;

    constructor() {
        this.userService = userService;
    }

    public loginUser = async (req: Request, res: Response, next: NextFunction) => {
        const user: IUser = req.body;
        const userData = await this.userService.userLogin(user);
        if (userData == null) {
            res.status(404).json({ success: "false", message: 'Invalid User' });
        } else {
            const authToken = this.userService.createToken(user.email);
            res.status(200).json({ success: "true", message: 'Valid User', authToken });
        }
    }
}

