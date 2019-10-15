import { Response } from "express"
import IRequest from './interface'
import { Client } from 'src/client/schema';
import { Types } from "mongoose";
import { ClientAnalytics } from "src/client-analytics/schema";
export default async function controller(req: IRequest, res: Response) {
    try {
        const userId = req.jwtData.user.id
        let client = await Client.findOne({ user: userId })
        let clientAnalytics = await ClientAnalytics.findOne({ client: client.id })
        if (!clientAnalytics)
            return res.status(404).send("naspa")
        clientAnalytics.buttons.push(req.params.buttonName)
        await clientAnalytics.save()
        return res.status(200).json(clientAnalytics)
    } catch (error) {
        console.log(error)
        return res.status(400).send(error)
    }
}