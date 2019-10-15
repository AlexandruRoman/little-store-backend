import IRequest from "./interface";
import { NextFunction, Response } from "express";
import * as Joi from 'joi'

const schema = {
    perPage: Joi.number().required(),
    page: Joi.number().required(),
    category: Joi.string().required(),
    tags: Joi.array().items(Joi.string())
}

export default async function validation(req: IRequest, res: Response, next: NextFunction) {
    const validation = Joi.validate(req.body, schema)
    if (validation.error)
        return res.status(400).send(validation.error)
    next()
}