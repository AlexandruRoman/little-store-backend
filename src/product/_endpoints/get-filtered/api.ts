import { Router } from "express";
import validation from './validation'
import controller from './controller'

export default function productGetFilteredEndpoint() {
    const router = Router()
    router.post(
        '/get-filtered',
        validation,
        controller
    )
    return router
}