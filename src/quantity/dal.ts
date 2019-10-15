import { Quantity } from "./schema";
import { Types } from "mongoose";

export interface IQuantityUpdateItem {
    idProduct: string
    quantity: string
}

export function bulkUpdateQuantities(quantityItems: IQuantityUpdateItem[]) {
    let bulk = Quantity.collection.initializeUnorderedBulkOp()
    for (let quantityItem of quantityItems)
        bulk.find({ product: Types.ObjectId(quantityItem.idProduct) })
            .updateOne({ $set: { quantity: parseInt(quantityItem.quantity) } })
    return bulk.execute()
}