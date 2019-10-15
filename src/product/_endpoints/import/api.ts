import { Router } from 'express'
import validation from './validation'
import controller from './controller'
import checkPermission from 'src/permission/middleware'
import PERMISSION from 'src/permission/list'
export default function productImportEndpoint() {
    const router = Router()
    router.post('/import', checkPermission(PERMISSION.IMPORT), validation, controller)
    return router
}
