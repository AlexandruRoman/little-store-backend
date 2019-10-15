import { IClient, IClientShoppingCart, IClientShoppingCartItem } from "src/client/schema";
import { IQuantity } from "./schema";
import { IProduct, IProductModel } from "src/product/schema";
import { IQuantityUpdateItem, bulkUpdateQuantities } from "./dal";

export function reduceQuantity(clientModel: IClient) {
    const items = (clientModel.shoppingCart as IClientShoppingCart).items as IClientShoppingCartItem[]
    const quantityUpdateItems: IQuantityUpdateItem[] = []
    for (let item of items) {
        const actualQuantity = ((item.product as IProduct).quantity as IQuantity).quantity
        const quantityToReduce = item.quantity
        const idProduct = (item.product as IProductModel).id
        quantityUpdateItems.push({
            idProduct,
            quantity: '' + (actualQuantity - quantityToReduce)
        })
    }
    return bulkUpdateQuantities(quantityUpdateItems)
}