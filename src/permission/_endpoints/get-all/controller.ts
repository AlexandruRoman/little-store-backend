import { Response } from "express"
import IRequest from './interface'
import { getProduct } from "src/product/dal";
import { Permission } from "src/permission/schema";

export default async function controller(req: IRequest, res: Response) {
    try {
        const permissions = await Permission.find()
        return res.status(200).json(permissions)
    } catch (error) {
        return res.status(400).send(error)
    }
}