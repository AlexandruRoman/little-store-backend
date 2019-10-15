import { Router } from "express";
import validation from './validation'
import controller from './controller'

export default function userAddStaffEndpoint() {
    const router = Router()
    router.post(
        '/add-staff',
        validation,
        controller
    )
    return router
}