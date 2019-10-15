import { Router } from "express";
import validation from './validation'
import controller from './controller'

export default function productGetEndpoint() {
    const router = Router()
    router.get(
        '/get/:id',
        validation,
        controller
    )
    return router
}