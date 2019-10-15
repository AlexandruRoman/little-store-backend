import { Response } from "express"
import IRequest from './interface'
import { DeliveryType } from 'src/delivery-type/schema';
import { computePaymentAmount } from 'src/client/service';
import { getFullClient } from "src/client/dal";

export default async function controller(req: IRequest, res: Response) {
    try {
        const deliveryTypeModel = await DeliveryType.findById(req.body.idDeliveryType)
        const clientModel = await getFullClient(req.jwtData.user.id)
        const price = computePaymentAmount(clientModel, deliveryTypeModel)
        return res.status(200).json(price)
    } catch (error) {
        console.log(error)
        return res.status(400).send(error)
    }
}