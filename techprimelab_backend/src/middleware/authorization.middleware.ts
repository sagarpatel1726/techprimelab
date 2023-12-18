import { NextFunction, Request, Response } from "express";
import { userService } from "../services/user.service.js";

export function authorization(req: Request, res: Response, next: NextFunction) {
    try {
        const accessToken: string = req.headers.authorization as string;
        userService.varifyToken(accessToken)
        next();
    } catch (error: any) {
        res.status(401).json({error : 'UnAuthorized'});
    }
}