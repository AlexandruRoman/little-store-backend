import { Response } from "express"
import IRequest from './interface'
import { Types } from 'mongoose';
import { Client } from 'src/client/schema';
import { getShoppingCartWithProducts } from "src/client/dal";

export default async function controller(req: IRequest, res: Response) {
    try {
        const userId = req.jwtData.user.id;
        const shoppingCart = {
            items: req.body.items.map(x => {
                const item = {
                    product: Types.ObjectId(x.idProduct),
                    quantity: x.quantity
                }
                return item
            })
        }
        await Client.findByIdAndUpdate(userId, { $set: { shoppingCart } })
        const client = await getShoppingCartWithProducts(userId)
        return res.status(200).json(client.shoppingCart)
    } catch (error) {
        return res.status(400).send(error)
    }
}