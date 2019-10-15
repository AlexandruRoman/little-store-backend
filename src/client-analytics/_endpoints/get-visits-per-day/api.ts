import { Router } from "express";
import controller from './controller'
import checkPermission from "src/permission/middleware";
import PERMISSION from "src/permission/list";

export default function clientAnalyticsGetVisitsPerDayEndpoint() {
    const router = Router()
    router.get(
        '/get-visits-per-day',
        controller
    )
    return router
}