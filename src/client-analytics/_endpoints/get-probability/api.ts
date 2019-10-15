import { Router } from "express";
import controller from './controller'

export default function clientAnalyticsGetProbabilityEndpoint() {
    const router = Router()
    router.get(
        '/get-probability',
        controller
    )
    return router
}