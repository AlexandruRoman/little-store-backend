import { createRouter } from "src/_helpers/api";
import clientAnalyticsVisitEndpoint from "./_endpoints/visit/api";
import clientAnalyticsGetAllEndpoint from "./_endpoints/get-all/api";
import clientAnalyticsGetVisitsPerDayEndpoint from "./_endpoints/get-visits-per-day/api";
import clientAnalyticsPressButtonEndpoint from "./_endpoints/press-button/api";
import clientAnalyticsGetProbabilityEndpoint from "./_endpoints/get-probability/api";
import clientAnalyticsVisitPageEndpoint from "./_endpoints/visit-page/api";
import clientAnalyticsGetTimePerPageEndpoint from "./_endpoints/get-time-per-page/api";

export default function clientAnalyticsApi() {
    return createRouter(
        '/client-analytics',
        clientAnalyticsVisitEndpoint,
        clientAnalyticsGetAllEndpoint,
        clientAnalyticsGetVisitsPerDayEndpoint,
        clientAnalyticsPressButtonEndpoint,
        clientAnalyticsGetProbabilityEndpoint,
        clientAnalyticsVisitPageEndpoint,
        clientAnalyticsGetTimePerPageEndpoint
    )
}