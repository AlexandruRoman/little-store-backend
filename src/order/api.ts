import { createRouter } from "src/_helpers/api";
import orderAddEndpoint from "./_endpoints/add/api";

export default function orderApi() {
    return createRouter(
        '/order',
        orderAddEndpoint
    )
}