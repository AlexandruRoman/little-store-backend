import { Schema, Document, Model, model } from 'mongoose'

export interface IClientGroup {
    name: string
}

export interface IClientGroupModel extends IClientGroup, Document {
}

export let ClientGroupSchema: Schema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        minlength: 2,
        maxlength: 50
    },
})

export const ClientGroup: Model<IClientGroupModel> = model<IClientGroupModel>("ClientGroup", ClientGroupSchema)