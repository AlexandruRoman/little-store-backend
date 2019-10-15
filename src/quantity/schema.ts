import { Schema, Document, Model, model, Types } from 'mongoose'

export interface IQuantity {
    product: Types.ObjectId
    quantity: number
}

export interface IQuantityModel extends IQuantity, Document {
}

export let QuantitySchema: Schema = new Schema({
    product: {
        type: Schema.Types.ObjectId,
        required: true,
        unique: true
    },
    quantity: {
        type: Number,
        required: true
    },
})

export const Quantity: Model<IQuantityModel> = model<IQuantityModel>("Quantity", QuantitySchema)