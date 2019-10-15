import { Response } from "express"
import IRequest from './interface'
import { DeliveryType } from "src/delivery-type/schema";

export default async function controller(req: IRequest, res: Response) {
    try {
        const deliveryTypes = await DeliveryType.find()
        return res.status(200).json(deliveryTypes)
    } catch (error) {
        return res.status(400).send(error)
    }
}