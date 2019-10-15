import { Response } from "express"
import IRequest from './interface'
import * as csvParser from 'csvtojson/v2'
import { bulkUpdatePrices } from "src/price/dal";
import { bulkUpdateQuantities } from "src/quantity/dal";

export default async function controller(req: IRequest, res: Response) {
    try {
        const file = req.files.file
        const data = await csvParser().fromString(file.data.toString())
        const formatedData = data.map(x => {
            return {
                id: x.sku,
                quantity: x.cantitate,
                price: x.pret
            }
        })

        const priceItems = formatedData.map(x => {
            return {
                idProduct: x.id,
                price: x.price
            }
        })
        await bulkUpdatePrices(priceItems)

        const quantityItems = formatedData.map(x => {
            return {
                idProduct: x.id,
                quantity: x.quantity
            }
        })
        await bulkUpdateQuantities(quantityItems)

        return res.status(200).send("gg")
    } catch (error) {
        return res.status(400).send(error)
    }
}