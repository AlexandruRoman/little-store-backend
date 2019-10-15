import { Schema, Document, Model, model } from 'mongoose'

export interface IButton {
    name: string
}

export interface IButtonModel extends IButton, Document {
}

export let ButtonSchema: Schema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        minlength: 2,
        maxlength: 50
    },
})

export const Button: Model<IButtonModel> = model<IButtonModel>("Button", ButtonSchema)