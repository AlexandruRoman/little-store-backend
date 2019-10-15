import IRequest from "./interface";
import { NextFunction, Response } from "express";
import * as Joi from 'joi'

const schema = {
    name: Joi.string().required(),
    producer: Joi.string().required(),
    details: Joi.string().required(),
    idCategory: Joi.string().required(),
    idTags: Joi.array().items(Joi.string()).required(),
    images: Joi.array().items(Joi.string()).required(),
    price: Joi.number().required(),
    quantity: Joi.number().required(),
    tva: Joi.number().required()
}

export default async function validation(req: IRequest, res: Response, next: NextFunction) {
    const validation = Joi.validate(req.body, schema)
    if (validation.error)
        return res.status(400).send(validation.error)
    next()
}