import { createRouter } from "src/_helpers/api";
import permissionGetAllEndpoint from "./_endpoints/get-all/api";


export default function permissionApi() {
    return createRouter(
        '/permission',
        permissionGetAllEndpoint
    )
}