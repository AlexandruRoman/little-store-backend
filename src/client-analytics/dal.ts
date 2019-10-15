import { Client } from "src/client/schema";
import { ClientAnalytics, IClientAnalytics } from "./schema";

export async function createClientAnalytics(userId: string) {
    const client = await Client.findOne({ user: userId })
    const clientAnalyticsModel: IClientAnalytics = {
        client: client.id,
        buttons: [],
        timePerPage: [],
        visitedDates: []
    }
    let clientAnalytics = new ClientAnalytics(clientAnalyticsModel)
    await clientAnalytics.save()
}