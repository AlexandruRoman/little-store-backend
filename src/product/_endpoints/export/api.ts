import { Router } from 'express'
import controller from './controller'
import checkPermission from 'src/permission/middleware'
import PERMISSION from 'src/permission/list'

export default function productExportEndpoint() {
    const router = Router()
    router.get('/export', checkPermission(PERMISSION.EXPORT), controller)
    return router
}
