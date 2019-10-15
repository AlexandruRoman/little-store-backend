import IRequest from "./interface";
import { NextFunction, Response } from "express";
import * as Joi from 'joi'

const schema = {
    idProduct: Joi.string().required(),
}

export default async function validation(req: IRequest, res: Response, next: NextFunction) {
    const validation = Joi.validate(req.params, schema)
    if (validation.error)
        return res.status(400).send(validation.error)
    next()
}