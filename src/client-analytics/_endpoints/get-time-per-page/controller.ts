import { Response } from "express"
import IRequest from './interface'
import { Client } from 'src/client/schema';
import { Types } from "mongoose";
import { ClientAnalytics, IClientAnalytics } from "src/client-analytics/schema";
import * as moment from 'moment';

export default async function controller(req: IRequest, res: Response) {
    try {
        const allClientAnalytics = await ClientAnalytics.find({}, 'timePerPage')
        const allClientAnalyticsTimePerPage = allClientAnalytics.map(x => x.timePerPage)
        let response = []

        const pages = ['PRODUCTS', "PRODUCT", "SHOPPING_CART"]
        for (let page of pages) {
            let sum = 0
            for (let timePerPage of allClientAnalyticsTimePerPage) {
                const x = timePerPage.find(x => x.page == page)
                if (x)
                    sum += x.time
            }
            response.push({
                page,
                time: Math.floor(sum / allClientAnalytics.length)
            })
        }
        return res.status(200).send(response)
    } catch (error) {
        console.log(error)
        return res.status(400).send(error)
    }
}