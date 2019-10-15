import { Client, IClientModel, IClient, IClientShoppingCart } from "./schema";
import { Types } from "mongoose";
import { ClientGroup } from "src/client-group/schema";
import CLIENT_GROUP from "src/client-group/list";

export function getShoppingCartWithProducts(id: string) {
    return Client.findOne({ user: id }).populate({
        path: 'shoppingCart.items.product',
        populate: { path: 'price' }
    })
}

export async function createClient(userId: string) {
    const clientGroup = await ClientGroup.findOne({ name: CLIENT_GROUP.BRONZE })
    const shoppingCart: IClientShoppingCart = {
        items: []
    }
    const clientModel: IClient = {
        user: Types.ObjectId(userId),
        shoppingCart,
        clientGroup: clientGroup.id,
    }
    const client = new Client(clientModel)
    return client.save()
}

export function getFullClient(id: string) {
    return Client.findOne({ user: id }).populate({
        path: 'shoppingCart.items.product',
        populate: [
            { path: 'price' },
            { path: 'quantity' },
            { path: 'tva' }
        ]
    })
        .populate("clientGroup")
}