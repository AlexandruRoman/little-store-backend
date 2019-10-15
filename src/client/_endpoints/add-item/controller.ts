import { Response } from "express"
import IRequest from './interface'
import { Client } from 'src/client/schema';
import { Types } from "mongoose";
export default async function controller(req: IRequest, res: Response) {
    try {
        const userId = req.jwtData.user.id
        const item = req.body.item
        let client = await Client.findOne({ user: userId })
        if (client.shoppingCart.items.find(x => (x.product as Types.ObjectId).equals(item.idProduct)))
            return res.status(400).send("Item already registered")
        client.shoppingCart.items.push({ product: Types.ObjectId(item.idProduct), quantity: item.quantity })
        await client.save()
        return res.status(200).json(client.shoppingCart)
    } catch (error) {
        console.log(error)
        return res.status(400).send(error)
    }
}