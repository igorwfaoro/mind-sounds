import { NextFunction, Request, Response } from "express";
import { Exception } from "../exceptions/exception";

export function onError(error, req: Request, res: Response, next: NextFunction) {
    // console.error(error);

    let message: string;
    let redirectTo: string = error.redirectTo || '/error';

    if (error instanceof Exception) {
        message = error.message;
    } else {
        message = 'Algo errado 🙁';
    }

    // res.redirect(`${redirectTo}?errorMessage=${message}`);

    throw error;
}