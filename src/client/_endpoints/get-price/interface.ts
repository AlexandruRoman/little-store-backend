import { IPermissionRequest } from "src/permission/interface";

interface IBody {
    idDeliveryType: string
}

export default interface IRequest extends IPermissionRequest {
    body: IBody
}