import { createRouter } from "src/_helpers/api";
import tagGetAllEndpoint from "./_endpoints/get-all/api";

export default function tagApi() {
    return createRouter(
        '/tag',
        tagGetAllEndpoint
    )
}