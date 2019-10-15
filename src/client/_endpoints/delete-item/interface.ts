import { IPermissionRequest } from "src/permission/interface";

interface IParams {
    idProduct: string
}

export default interface IRequest extends IPermissionRequest {
    params: IParams
}