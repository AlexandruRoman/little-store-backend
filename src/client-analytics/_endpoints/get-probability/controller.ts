import { Response } from "express"
import IRequest from './interface'
import { Client } from 'src/client/schema';
import { Types } from "mongoose";
import { ClientAnalytics, IClientAnalytics } from "src/client-analytics/schema";
import * as moment from 'moment';
import { UserFlow } from "src/user-flow/schema";

function occurrences(string: string, subString: string, allowOverlapping: boolean) {

    string += "";
    subString += "";
    if (subString.length <= 0) return (string.length + 1);

    let n = 0,
        pos = 0,
        step = allowOverlapping ? 1 : subString.length;

    while (true) {
        pos = string.indexOf(subString, pos);
        if (pos >= 0) {
            ++n;
            pos += step;
        } else break;
    }
    return n;
}

export default async function controller(req: IRequest, res: Response) {
    try {
        const allClientAnalytics = await ClientAnalytics.find({}, 'buttons')
        const allClientAnalyticsButtons = allClientAnalytics.map(x => x.buttons)
        let response = []
        const allUserFlows = await UserFlow.find()
        const allUserFlowsButtons = allUserFlows.map(x => x.buttons)

        for (let userFlowButtons of allUserFlowsButtons) {
            let probabilitiesSum = 0
            for (let clientAnalyticsButtons of allClientAnalyticsButtons) {
                const occurencies = occurrences(clientAnalyticsButtons.toString(), userFlowButtons.toString(), false)
                if (occurencies > 0)
                    probabilitiesSum += (occurencies * userFlowButtons.length) / clientAnalyticsButtons.length
            }
            response.push({
                buttons: userFlowButtons,
                probability: probabilitiesSum / allClientAnalytics.length * 100,
            })
        }
        return res.status(200).send(response)
    } catch (error) {
        console.log(error)
        return res.status(400).send(error)
    }
}