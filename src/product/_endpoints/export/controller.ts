import { Response } from "express"
import IRequest from './interface'
import { Parser } from "json2csv";
import { getProductsForExport } from "src/product/dal";
import { ICategoryModel } from "src/category/schema";
import { IPriceModel } from "src/price/schema";

export default async function controller(req: IRequest, res: Response) {
    try {
        const fields = [
            { value: 'producer', label: 'Nume producator' },
            { value: 'name', label: 'Denumire produs' },
            { value: 'category', label: 'Categorie' },
            { value: 'price', label: 'Pret' },
            { value: 'url', label: 'URL produs' },
            { value: 'image', label: 'URL imagine produs' },
        ]
        const products = await getProductsForExport()
        const results = products.map(x => {
            return {
                producer: x.producer,
                name: x.name,
                category: (x.category as ICategoryModel).name,
                price: (x.price as IPriceModel).price,
                url: 'www.pcgarage2.com/product/' + x.id,
                image: x.images ? x.images[0] : ''
            }
        })
        const parser = new Parser({ fields })
        let csvData = parser.parse(results)
        csvData = csvData.replace(/\"/g, '')
        res.attachment('products.csv')
        return res.status(200).send(csvData)
    } catch (error) {
        return res.status(400).send(error)
    }
}