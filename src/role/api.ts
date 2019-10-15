import { createRouter } from "src/_helpers/api";
import roleUpdateStaffPermissionsEndpoint from "./endpoints/update-staff-permissions/api";
import roleGetStaffPermissionsEndpoint from "./endpoints/get-staff-permissions/api";

export default function roleApi() {
    return createRouter(
        '/role',
        roleUpdateStaffPermissionsEndpoint,
        roleGetStaffPermissionsEndpoint
    )
}