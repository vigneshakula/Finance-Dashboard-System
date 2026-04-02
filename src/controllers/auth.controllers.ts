import { Request, Response } from 'express';
import * as authService from '../services/auth.services';

export const signup = async (req: Request, res: Response) => {
    try {
        const result = await authService.signup(req.body);
        
        res.status(201).json({
            success: true,
            message: result.message
        });
    } catch (err: any) {

        res.status(400).json({
            success: false,
            message: err.message
        });
    }
};


export const signin = async (req: Request, res: Response) => {
    try {
        const result = await authService.signin(req.body);

        res.status(200).json({
            success: true,
            data: result
        });
    } catch (err: any) {

        res.status(401).json({
            success: false,
            message: err.message
        });
    }
};