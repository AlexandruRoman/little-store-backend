import { IPermissionRequest } from "src/permission/interface";

interface IBody {
    item: ICartItem
}

interface ICartItem {
    idProduct: string,
    quantity: number
}

export default interface IRequest extends IPermissionRequest {
    body: IBody
}