import { Response } from "express"
import IRequest from './interface'
import { Client } from 'src/client/schema';
import { Types } from "mongoose";
export default async function controller(req: IRequest, res: Response) {
    try {
        const userId = req.jwtData.user.id
        const idProduct = req.params.idProduct
        let client = await Client.findOne({ user: userId })
        client.shoppingCart.items = client.shoppingCart.items.filter(x => !(x.product as Types.ObjectId).equals(idProduct))
        await client.save()
        return res.status(200).json(client.shoppingCart)
    } catch (error) {
        return res.status(400).send(error)
    }
}