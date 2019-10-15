import { Price } from "./schema";
import { Types } from "mongoose";

interface IPriceItem {
    idProduct: string
    price: string
}

export function bulkUpdatePrices(priceItems: IPriceItem[]) {
    let bulk = Price.collection.initializeUnorderedBulkOp()
    for (let priceItem of priceItems)
        bulk.find({ product: Types.ObjectId(priceItem.idProduct) })
            .updateOne({ $set: { price: parseInt(priceItem.price) } })
    return bulk.execute()
}