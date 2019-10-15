import { IDeliveryTypeModel, DeliveryType } from './../delivery-type/schema';
import { Schema, Document, Model, model, Types } from 'mongoose'
import { IProductModel, Product } from 'src/product/schema';
import { IClientModel, Client } from 'src/client/schema';

const client = Client
const product = Product
const deliveryType = DeliveryType

export interface IOrderItem {
    product: Types.ObjectId | IProductModel
    quantity: number
}

export let OrderItemSchema: Schema = new Schema({
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

export interface IOrder {
    client: Types.ObjectId | IClientModel
    items: IOrderItem[]
    deliveryType: Types.ObjectId | IDeliveryTypeModel
    paymentAmount: number
}

export interface IOrderModel extends IOrder, Document {
}

export let OrderSchema: Schema = new Schema({
    client: {
        type: Schema.Types.ObjectId,
        ref: 'Client',
        required: true
    },
    items: [OrderItemSchema],
    deliveryType: {
        type: Schema.Types.ObjectId,
        ref: 'DeliveryType',
        required: true
    },
    paymentAmount: {
        type: Number,
        required: true
    }
})



export const Order: Model<IOrderModel> = model<IOrderModel>("Order", OrderSchema)