import { Router } from "express";
import validation from './validation'
import controller from './controller'
import checkPermission from "src/permission/middleware";
import PERMISSION from "src/permission/list";

export default function clientGetPriceEndpoint() {
    const router = Router()
    router.post(
        '/get-price',
        checkPermission(PERMISSION.EVERYTHING),
        validation,
        controller
    )
    return router
}