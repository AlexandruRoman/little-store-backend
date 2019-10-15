import { Product } from "./schema";

interface IProductFilter {
    perPage: number
    page: number
    category: string
    tags?: string[]
}
export function getFilteredProducts(filters: IProductFilter) {
    const conditions: any = {
        category: filters.category,
    }
    if (filters.tags && filters.tags.length > 0)
        conditions.tags =
            {
                $in: filters.tags
            }
    return Product.find(conditions)
        .populate('tags')
        .populate('category')
        .populate('price')
        .populate('tva')
        .skip((filters.page - 1) * filters.perPage)
        .limit(filters.perPage)
}
export function getProduct(id: string) {
    return Product.findById(id)
        .populate('tags')
        .populate('tags')
        .populate('category')
        .populate('price')
        .populate('tva')
}

export function getProductsForExport() {
    return Product.find()
        .populate('category')
        .populate('price')
}