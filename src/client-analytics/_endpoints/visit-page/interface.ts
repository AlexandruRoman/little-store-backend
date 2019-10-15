import { IPermissionRequest } from "src/permission/interface";

interface IBody {
    time: number
    page: string
}

export default interface IRequest extends IPermissionRequest {
    body: IBody
}