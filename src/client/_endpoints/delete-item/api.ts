import { Router } from "express";
import validation from './validation'
import controller from './controller'
import checkPermission from "src/permission/middleware";
import PERMISSION from "src/permission/list";

export default function clientDeleteItemEndpoint() {
    const router = Router()
    router.delete(
        '/delete-item/:idProduct',
        checkPermission(PERMISSION.EVERYTHING),
        validation,
        controller
    )
    return router
}