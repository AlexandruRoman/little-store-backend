import { IClientModel, IClient, IClientShoppingCart, IClientShoppingCartItem } from "./schema";
import { IDeliveryTypeModel } from "src/delivery-type/schema";
import { IProductModel, IProduct } from "src/product/schema";
import { IPriceModel } from "src/price/schema";
import { IClientGroupModel } from "src/client-group/schema";
import { ITvaModel } from "src/tva/schema";
import CLIENT_GROUP from "src/client-group/list";
import { IQuantityModel, IQuantity } from "src/quantity/schema";

interface IPriceInfo {
    deliveryPrice: number
    tva: number
    amount: number
    discount: number
    total: number
}

export function computePaymentAmount(client: IClientModel, deliveryType: IDeliveryTypeModel): IPriceInfo {
    const items = client.shoppingCart.items
    let amount
    let tva
    let discount = 0
    let deliveryPrice
    let total
    let clientGroupName

    //find client group
    clientGroupName = (client.clientGroup as IClientGroupModel).name

    //compute tva and amount without tva 
    tva = 0
    amount = 0
    for (let item of items) {
        const product = item.product as IProductModel
        const price = (product.price as IPriceModel).price
        const tvaPercent = (product.tva as ITvaModel).tva
        amount += (price * item.quantity)
        tva += (amount * tvaPercent / 100)
    }

    //compute delivery price
    deliveryPrice = deliveryType.price
    if (amount + tva > 1000)
        deliveryPrice = 0
    if (clientGroupName === CLIENT_GROUP.GOLD)
        deliveryPrice = 0

    //compute discount percent
    if (amount + tva > 2000)
        discount = 5
    if (clientGroupName === CLIENT_GROUP.GOLD)
        discount = 10

    //compute total
    total = (amount + tva) * (100 - discount) / 100 + deliveryPrice

    return {
        amount,
        deliveryPrice,
        discount,
        total,
        tva
    }
}

export function checkAvailability(clientModel: IClient) {
    const items = (clientModel.shoppingCart as IClientShoppingCart).items as IClientShoppingCartItem[]
    for (let item of items)
        if (item.quantity > ((item.product as IProduct).quantity as IQuantity).quantity)
            return false
    return true
}