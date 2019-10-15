import { Response } from "express"
import IRequest from './interface'
import { Product, IProduct } from "src/product/schema";
import { Price, IPrice } from "src/price/schema";
import { Types } from "mongoose";
import { IQuantity, Quantity } from "src/quantity/schema";
import { ITva, Tva } from "src/tva/schema";

export default async function controller(req: IRequest, res: Response) {
    try {
        const priceModel: IPrice = {
            price: req.body.price,
            product: Types.ObjectId()
        }
        const price = new Price(priceModel)

        const quantityModel: IQuantity = {
            quantity: req.body.quantity,
            product: Types.ObjectId()
        }
        const quantity = new Quantity(quantityModel)

        const tvaModel: ITva = {
            tva: req.body.tva,
            product: Types.ObjectId()
        }
        const tva = new Tva(tvaModel)

        const tags = req.body.idTags.map(Types.ObjectId)
        const productModel: IProduct = {
            name: req.body.name,
            producer: req.body.producer,
            details: req.body.details,
            category: Types.ObjectId(req.body.idCategory),
            tags,
            images: req.body.images,
            rate: 0,
            price: price.id,
            quantity: quantity.id,
            tva: tva.id
        }
        const product = new Product(productModel)

        price.product = product.id
        quantity.product = product.id
        tva.product = product.id

        const result = await Promise.all([
            price.save(),
            quantity.save(),
            tva.save(),
            product.save()
        ])


        return res.status(200).json(result)
    } catch (error) {
        console.log(error)
        return res.status(400).send(error)
    }
}