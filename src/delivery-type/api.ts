import { createRouter } from "src/_helpers/api";
import deliveryTypeGetAllEndpoint from "./_endpoints/get-all/api";

export default function deliveryTypeApi() {
    return createRouter(
        '/delivery-type',
        deliveryTypeGetAllEndpoint
    )
}