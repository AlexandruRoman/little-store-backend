import { IClientGroup, ClientGroup } from './../client-group/schema';
import { IUserModel, User } from 'src/user/schema';
import { Schema, Document, Model, model, Types } from 'mongoose'
import { IProductModel, Product } from 'src/product/schema';

const clientGroup = ClientGroup
const user = User
const product = Product

export interface IClientShoppingCartItem {
    product: Types.ObjectId | IProductModel
    quantity: number
}

export let ClientShoppingCartItemSchema: Schema = new Schema({
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
})

export interface IClientShoppingCart {
    items: IClientShoppingCartItem[]
}

export let ClientShoppingCartSchema: Schema = new Schema({
    items: [ClientShoppingCartItemSchema]
})

export interface IClient {
    user: Types.ObjectId | IUserModel
    shoppingCart: IClientShoppingCart
    clientGroup: Types.ObjectId | IClientGroup
}

export interface IClientModel extends IClient, Document {
}

export let ClientSchema: Schema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    shoppingCart: {
        type: ClientShoppingCartSchema,
        required: true
    },
    clientGroup: {
        type: Schema.Types.ObjectId,
        ref: 'ClientGroup',
        required: true
    }
})



export const Client: Model<IClientModel> = model<IClientModel>("Client", ClientSchema)