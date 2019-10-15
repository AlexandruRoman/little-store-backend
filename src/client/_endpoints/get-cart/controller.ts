import { Response } from "express"
import IRequest from './interface'
import { getShoppingCartWithProducts } from "src/client/dal";

export default async function controller(req: IRequest, res: Response) {
    try {
        const userId = req.jwtData.user.id;
        const client = await getShoppingCartWithProducts(userId)
        return res.status(200).json(client.shoppingCart)
    } catch (error) {
        console.log(error)
        return res.status(400).send(error)
    }
}