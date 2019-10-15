import { Response } from "express"
import IRequest from './interface'
import { Tag } from "src/tag/schema";

export default async function controller(req: IRequest, res: Response) {
    try {
        const tags = await Tag.find()
        return res.status(200).json(tags)
    } catch (error) {
        return res.status(400).send(error)
    }
}