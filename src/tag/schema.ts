import { Schema, Document, Model, model } from 'mongoose'

export interface ITag {
    name: string
}

export interface ITagModel extends ITag, Document {
}

export let TagSchema: Schema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        minlength: 2,
        maxlength: 50
    },
})

export const Tag: Model<ITagModel> = model<ITagModel>("Tag", TagSchema)