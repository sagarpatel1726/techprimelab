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
            const token: string = req.headers.authorization as string;
            let isTokenValid = false

            try {
                isTokenValid = userService.varifyToken(token) ? true : false
            } catch (error) {
                isTokenValid = false
            }
            if (token && isTokenValid) {
                res.status(200).json({ success: "true", message: 'Valid User token' });
                return;
            } else if (!isTokenValid && (!user.email || !user.password)) {
                res.status(404).json({ success: "false", message: 'Invalid token' });
                return
            }
            const userData = await this.userService.userLogin(user);
            if (userData == null) {
                res.status(404).json({ success: "false", message: 'Invalid User' });
            } else {
                const authToken = this.userService.createToken(user.email);
                res.status(200).json({ success: "true", message: 'Valid User', authToken });
            }
        } catch (error) {
            res.status(404).json({ success: "false", message: 'Invalid User' });
        }
    }
}

