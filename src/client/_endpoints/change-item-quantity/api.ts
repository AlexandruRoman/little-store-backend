import { Router } from "express";
import validation from './validation'
import controller from './controller'
import checkPermission from "src/permission/middleware";
import PERMISSION from "src/permission/list";

export default function clientChangeItemQuantityEndpoint() {
    const router = Router()
    router.put(
        '/change-item-quantity',
        checkPermission(PERMISSION.EVERYTHING),
        validation,
        controller
    )
    return router
}