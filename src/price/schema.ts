import { Schema, Document, Model, model, Types } from 'mongoose'

export interface IPrice {
    product: Types.ObjectId
    price: number
}

export interface IPriceModel extends IPrice, Document {
}

export let PriceSchema: Schema = new Schema({
    product: {
        type: Schema.Types.ObjectId,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true
    },
})

export const Price: Model<IPriceModel> = model<IPriceModel>("Price", PriceSchema)