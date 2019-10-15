import { IPermissionRequest } from "src/permission/interface";

interface IBody {
    name: string
    producer: string
    details: string
    idCategory: string
    idTags: string[]
    images: string[]
    price: number
    quantity: number
    tva: number
}

export default interface IRequest extends IPermissionRequest {
    body: IBody
}