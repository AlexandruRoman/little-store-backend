import { Router } from "express";
import validation from './validation'
import controller from './controller'
import checkPermission from "src/permission/middleware";
import PERMISSION from "src/permission/list";

export default function clientAnalyticsPressButtonEndpoint() {
    const router = Router()
    router.post(
        '/press-button/:buttonName',
        checkPermission(PERMISSION.EVERYTHING),
        validation,
        controller
    )
    return router
}