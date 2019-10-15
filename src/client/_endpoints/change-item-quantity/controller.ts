import { Response } from "express"
import IRequest from './interface'
import { Client } from 'src/client/schema';
import { Types } from "mongoose";
export default async function controller(req: IRequest, res: Response) {
    try {
        const userId = req.jwtData.user.id
        const item = req.body.item
        let client = await Client.findOne({ user: userId })
        const itemIndex = client.shoppingCart.items.findIndex(x => (x.product as Types.ObjectId).equals(item.idProduct))
        if (itemIndex === -1)
            return res.status(400).send("Item not found")
        client.shoppingCart.items[itemIndex].quantity = item.quantity
        await client.save()
        return res.status(200).json(client.shoppingCart)
    } catch (error) {
        return res.status(400).send(error)
    }
}