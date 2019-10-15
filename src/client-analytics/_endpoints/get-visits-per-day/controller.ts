import { Response } from "express"
import IRequest from './interface'
import { Client } from 'src/client/schema';
import { Types } from "mongoose";
import { ClientAnalytics, IClientAnalytics } from "src/client-analytics/schema";
import * as moment from 'moment';

export default async function controller(req: IRequest, res: Response) {
    try {
        const today = moment().format("MM-DD-YYYY")
        let visitsPerDay = []
        for (let i = 0; i < 10; i++) {
            const day = moment().subtract(i, 'days').format("MM-DD-YYYY")
            const visits = await ClientAnalytics.countDocuments({ visitedDates: day })
            visitsPerDay.push({ day, visits })
        }
        return res.status(200).json(visitsPerDay)
    } catch (error) {
        console.log(error)
        return res.status(400).send(error)
    }
}