import { Router } from "express";
import controller from './controller'
import checkPermission from "src/permission/middleware";
import PERMISSION from "src/permission/list";

export default function clientAnalyticsGetTimePerPageEndpoint() {
    const router = Router()
    router.get(
        '/get-time-per-page',
        controller
    )
    return router
}