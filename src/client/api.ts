import { createRouter } from "src/_helpers/api";
import clientUpdateCartEndpoint from "./_endpoints/update-cart/api";
import clientGetCartEndpoint from "./_endpoints/get-cart/api";
import clientAddItemEndpoint from "./_endpoints/add-item/api";
import clientDeleteItemEndpoint from "./_endpoints/delete-item/api";
import clientChangeItemQuantityEndpoint from "./_endpoints/change-item-quantity/api";
import clientGetPriceEndpoint from "./_endpoints/get-price/api";

export default function clientApi() {
    return createRouter(
        '/client',
        clientUpdateCartEndpoint,
        clientGetCartEndpoint,
        clientAddItemEndpoint,
        clientDeleteItemEndpoint,
        clientChangeItemQuantityEndpoint,
        clientGetPriceEndpoint
    )
}