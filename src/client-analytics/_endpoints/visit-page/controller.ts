import { Response } from 'express'
import IRequest from './interface'
import { Client } from 'src/client/schema'
import { Types } from 'mongoose'
import { ClientAnalytics } from 'src/client-analytics/schema'
export default async function controller(req: IRequest, res: Response) {
    try {
        const userId = req.jwtData.user.id
        let client = await Client.findOne({ user: userId })
        let clientAnalytics = await ClientAnalytics.findOne({ client: client.id })
        if (!clientAnalytics) return res.status(404).send('naspa')
        const timePerPage = clientAnalytics.timePerPage.findIndex(x => x.page == req.body.page)
        if (timePerPage != -1)
            clientAnalytics.timePerPage[timePerPage] = {
                page: req.body.page,
                time: clientAnalytics.timePerPage[timePerPage].time + req.body.time
            }
        else
            clientAnalytics.timePerPage.push({
                page: req.body.page,
                time: req.body.time
            })
        await clientAnalytics.save()
        return res.status(200).json(clientAnalytics)
    } catch (error) {
        console.log(error)
        return res.status(400).send(error)
    }
}
