import { Response } from "express"
import IRequest from './interface'
import { Client } from 'src/client/schema';
import { Types } from "mongoose";
import { ClientAnalytics, IClientAnalytics } from "src/client-analytics/schema";
import * as moment from 'moment';

export default async function controller(req: IRequest, res: Response) {
    try {
        const userId = req.jwtData.user.id
        const client = await Client.findOne({ user: userId })
        let clientAnalytics = await ClientAnalytics.findOne({ client: client.id })
        if (!clientAnalytics) {
            return res.status(404)
        }
        const today = moment().format("MM-DD-YYYY")
        if (clientAnalytics.visitedDates.find(x => x == today))
            return res.status(400).send("Te iubesc mult de tot")
        clientAnalytics.visitedDates.push(moment().format("MM-DD-YYYY"))
        await clientAnalytics.save()
        return res.status(200).json(clientAnalytics)
    } catch (error) {
        console.log(error)
        return res.status(400).send(error)
    }
}