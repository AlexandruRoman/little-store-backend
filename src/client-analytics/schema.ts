import { Schema, Document, Model, model, Types } from 'mongoose'
import { IButtonModel, Button } from 'src/button/schema'
const button = Button

export interface ITimePerPage {
    page: string
    time: number
}

export let TimePerPageSchema: Schema = new Schema({
    page: {
        type: String,
        required: true
    },
    time: {
        type: Number,
        required: true
    }
})

export interface IClientAnalytics {
    client: Types.ObjectId
    buttons: string[]
    visitedDates: String[]
    timePerPage: ITimePerPage[]
}

export interface IClientAnalyticsModel extends IClientAnalytics, Document {}

export let ClientAnalyticsSchema: Schema = new Schema({
    client: {
        type: Schema.Types.ObjectId,
        required: true,
        unique: true
    },
    buttons: [
        {
            type: String,
            required: true
        }
    ],
    visitedDates: [String],
    timePerPage: [
        {
            type: TimePerPageSchema,
            required: true
        }
    ]
})

export const ClientAnalytics: Model<IClientAnalyticsModel> = model<IClientAnalyticsModel>(
    'ClientAnalytics',
    ClientAnalyticsSchema
)
