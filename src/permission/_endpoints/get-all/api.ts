import { Router } from "express";
import controller from './controller'

export default function permissionGetAllEndpoint() {
    const router = Router()
    router.get(
        '/get-all',
        controller
    )
    return router
}