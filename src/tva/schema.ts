import { Schema, Document, Model, model, Types } from 'mongoose'

export interface ITva {
    product: Types.ObjectId
    tva: number
}

export interface ITvaModel extends ITva, Document {
}

export let TvaSchema: Schema = new Schema({
    product: {
        type: Schema.Types.ObjectId,
        required: true,
        unique: true
    },
    tva: {
        type: Number,
        required: true
    },
})

export const Tva: Model<ITvaModel> = model<ITvaModel>("Tva", TvaSchema)