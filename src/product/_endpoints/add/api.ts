import { Router } from "express";
import validation from './validation'
import controller from './controller'

export default function productAddEndpoint() {
    const router = Router()
    router.post(
        '/add',
        validation,
        controller
    )
    return router
}