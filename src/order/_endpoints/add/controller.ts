import { Response } from "express"
import IRequest from './interface'
import { DeliveryType } from 'src/delivery-type/schema';
import { computePaymentAmount, checkAvailability } from 'src/client/service';
import { getFullClient } from "src/client/dal";
import { IOrder, Order } from "src/order/schema";
import { IClientShoppingCart } from "src/client/schema";
import { reduceQuantity } from "src/quantity/service";

export default async function controller(req: IRequest, res: Response) {
    try {
        const deliveryTypeModel = await DeliveryType.findById(req.body.idDeliveryType)
        const clientModel = await getFullClient(req.jwtData.user.id)
        const price = computePaymentAmount(clientModel, deliveryTypeModel)

        if (!checkAvailability(clientModel))
            return res.status(400).send('Not enough items')

        await reduceQuantity(clientModel)

        const orderModel: IOrder = {
            client: clientModel.id,
            deliveryType: deliveryTypeModel.id,
            items: (clientModel.shoppingCart as IClientShoppingCart).items,
            paymentAmount: price.total
        }
        const order = new Order(orderModel)
        await order.save()

        return res.status(200).json(clientModel)
    } catch (error) {
        console.log(error)
        return res.status(400).send(error)
    }
}