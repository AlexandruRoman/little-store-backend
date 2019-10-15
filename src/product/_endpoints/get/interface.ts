import { IPermissionRequest } from "src/permission/interface";

interface IParams {
    id: string
}

export default interface IRequest extends IPermissionRequest {
    params: IParams
}