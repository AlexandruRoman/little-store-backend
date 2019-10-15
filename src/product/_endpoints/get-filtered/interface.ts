import { IPermissionRequest } from "src/permission/interface";

interface IBody {
    perPage: number
    page: number
    category: string
    tags?: string[]
}

export default interface IRequest extends IPermissionRequest {
    body: IBody
}