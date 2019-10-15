import { Response } from "express"
import IRequest from './interface'
import { getProduct } from "src/product/dal";

export default async function controller(req: IRequest, res: Response) {
    try {
        const product = await getProduct(req.params.id)
        return res.status(200).json(product)
    } catch (error) {
        return res.status(400).send(error)
    }
}