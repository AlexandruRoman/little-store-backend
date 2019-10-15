import { IPermissionRequest } from "src/permission/interface";

interface IBody {
    permissions: Array<String>
}

export default interface IRequest extends IPermissionRequest {
    body: IBody
}