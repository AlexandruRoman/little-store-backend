import { Response } from "express"
import IRequest from './interface'
import { Category } from "src/category/schema";

export default async function controller(req: IRequest, res: Response) {
    try {
        const categories = await Category.find()
        return res.status(200).json(categories)
    } catch (error) {
        return res.status(400).send(error)
    }
}