import { Schema, Document, Model, model } from 'mongoose'

export interface ICategory {
    name: string
}

export interface ICategoryModel extends ICategory, Document {
}

export let CategorySchema: Schema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        minlength: 2,
        maxlength: 50
    },
})

export const Category: Model<ICategoryModel> = model<ICategoryModel>("Category", CategorySchema)