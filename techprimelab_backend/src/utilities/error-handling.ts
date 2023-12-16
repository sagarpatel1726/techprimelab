import { Response } from "express";

export default function errorHandling(res: Response, statuscode: number = 400, error: any) {
    if (error.name === 'ValidationError') {
        const errors: any = {};
        for (const field in error.errors) {
            errors[field] = error.errors[field].message;
        }
        res.status(400).json({ success: false, errors });
    } else {
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
}
