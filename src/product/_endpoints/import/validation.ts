import IRequest from "./interface";
import { NextFunction, Response } from "express";

export default async function validation(req: IRequest, res: Response, next: NextFunction) {
    if (!req.files.file)
        return res.status(400).send('Please upload a file!')
    next()
}