import { Router } from "express";
import controller from './controller'
import checkPermission from "src/permission/middleware";
import PERMISSION from "src/permission/list";

export default function clientAnalyticsGetAllEndpoint() {
    const router = Router()
    router.get(
        '/get-all',
        checkPermission(PERMISSION.EVERYTHING),
        controller
    )
    return router
}