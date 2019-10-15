import { Router } from "express";
import controller from './controller'
import checkPermission from "src/permission/middleware";
import PERMISSION from "src/permission/list";

export default function clientGetCartEndpoint() {
    const router = Router()
    router.get(
        '/get-cart',
        checkPermission(PERMISSION.EVERYTHING),
        controller
    )
    return router
}