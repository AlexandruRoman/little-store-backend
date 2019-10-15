import { createRouter } from "src/_helpers/api";
import categoryGetAllEndpoint from "./_endpoints/get-all/api";

export default function categoryApi() {
    return createRouter(
        '/category',
        categoryGetAllEndpoint
    )
}