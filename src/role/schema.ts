import { Schema, Document, Model, model, Types } from 'mongoose'
import { IPermissionModel, Permission } from 'src/permission/schema';

const permisson = Permission

export interface IRole {
    name: string
    permissions: (Types.ObjectId | IPermissionModel)[]
}

export interface IRoleModel extends IRole, Document {
}

export let RoleSchema: Schema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    permissions: [{
        type: Schema.Types.ObjectId,
        ref: 'Permission',
        required: true
    }],
})

export const Role: Model<IRoleModel> = model<IRoleModel>("Role", RoleSchema)