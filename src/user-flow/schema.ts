import { Schema, Document, Model, model, Types } from 'mongoose'
import { IButtonModel, Button } from 'src/button/schema';

const button = Button

export interface IUserFlow {
    buttons: string[]
}

export interface IUserFlowModel extends IUserFlow, Document {
}

export let UserFlowSchema: Schema = new Schema({
    buttons: [{
        type: String,
        required: true
    }],
})

export const UserFlow: Model<IUserFlowModel> = model<IUserFlowModel>("UserFlow", UserFlowSchema)