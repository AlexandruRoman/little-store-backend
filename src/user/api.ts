import { createRouter } from "src/_helpers/api";
import userAddStaffEndpoint from "./endpoints/add-staff/api";

export default function userApi() {
    return createRouter(
        '/user',
        userAddStaffEndpoint
    )
}