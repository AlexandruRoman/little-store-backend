import { Schema, Document, Model, model } from 'mongoose'

export interface IDeliveryType {
    name: string
    price: number
}

export interface IDeliveryTypeModel extends IDeliveryType, Document {
}

export let DeliveryTypeSchema: Schema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        minlength: 2,
        maxlength: 50
    },
    price: {
        type: Number,
        required: true
    }
})

export const DeliveryType: Model<IDeliveryTypeModel> = model<IDeliveryTypeModel>("DeliveryType", DeliveryTypeSchema)