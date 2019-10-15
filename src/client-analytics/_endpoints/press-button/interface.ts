import { IPermissionRequest } from "src/permission/interface";

interface IParams {
    buttonName: string
}

export default interface IRequest extends IPermissionRequest {
    params: IParams
}