import { NextFunction, Request, Response } from "express";
import { IUser } from "../interface/user.interface.js";
import { userService, UserService } from "../services/user.service.js";

export class UserController {
    private userService: UserService;

    constructor() {
        this.userService = userService;
    }

    public loginUser = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const user: IUser = req.body;
            const userData = await this.userService.userLogin(user);
            if (!userData) {
                res.status(404).json({ success: "false", message: 'Invalid User' });
            } else {
                const authToken = this.userService.createToken(user.email);
                res.status(200).json({ success: "true", message: 'Valid User', authToken });
            }
        }
        catch (error) {
            res.status(404).json({ success: "false", message: 'Internal server error!' });
        }
    }

    public createUser = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const user: IUser = req.body;
            const userData = await userService.createUser(user);
            res.status(201).json({ data: userData, message: 'User created successfully' });
        } catch (error: any) {
            res.status(500).json({ error: 'Internal server error!' });
        }
    }
}

