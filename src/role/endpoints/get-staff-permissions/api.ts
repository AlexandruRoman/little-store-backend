import { Router } from "express";
import controller from './controller'
import checkPermission from "src/permission/middleware";
import PERMISSION from "src/permission/list";

export default function roleGetStaffPermissionsEndpoint() {
    const router = Router()
    router.get(
        '/get-staff-permissions',
        // checkPermission(PERMISSION.MANAGE_ROLES),
        controller
    )
    return router
}