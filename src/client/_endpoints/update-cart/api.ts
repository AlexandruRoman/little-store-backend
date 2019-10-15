import { Router } from "express";
import validation from './validation'
import controller from './controller'

export default function clientUpdateCartEndpoint() {
    const router = Router()
    router.put(
        '/update-cart',
        validation,
        controller
    )
    return router
}