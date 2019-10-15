import { ITagModel, Tag } from './../tag/schema';
import { ICategoryModel, Category } from './../category/schema';
import { Schema, Document, Model, model, Types } from 'mongoose'
import { IPriceModel, Price } from 'src/price/schema';
import { IQuantityModel, Quantity } from 'src/quantity/schema';
import { ITvaModel } from 'src/tva/schema';

const price = Price
const quantity = Quantity
const tag = Tag
const category = Category

export interface IProduct {
    name: string
    producer: string
    details: string
    category: Types.ObjectId | ICategoryModel
    tags: (Types.ObjectId | ITagModel)[]
    rate: number
    images: string[]
    price: Types.ObjectId | IPriceModel
    quantity: Types.ObjectId | IQuantityModel
    tva: Types.ObjectId | ITvaModel
}

export interface IProductModel extends IProduct, Document {
}

export let ProductSchema: Schema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 500,
        unique: true
    },
    producer: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 50
    },
    details: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 5000
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    tags: [{
        type: Schema.Types.ObjectId,
        ref: 'Tag',
        required: true
    }],
    rate: {
        type: Number,
        required: true
    },
    images: [{
        type: String,
        required: true
    }],
    price: {
        type: Schema.Types.ObjectId,
        ref: 'Price',
        required: true
    },
    quantity: {
        type: Schema.Types.ObjectId,
        ref: 'Quantity',
        required: true
    },
    tva: {
        type: Schema.Types.ObjectId,
        ref: 'Tva',
        required: true
    },
})

export const Product: Model<IProductModel> = model<IProductModel>("Product", ProductSchema)