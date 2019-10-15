import authApi from "./auth/api";
import userApi from "./user/api";
import { createRouter } from "./_helpers/api";
import roleApi from "./role/api";
import clientApi from "./client/api";
import productApi from "./product/api";
import categoryApi from "./category/api";
import tagApi from "./tag/api";
import orderApi from "./order/api";
import deliveryTypeApi from "./delivery-type/api";
import clientAnalyticsApi from "./client-analytics/api";
import permissionApi from "./permission/api";

export default function indexApi() {
    return createRouter(
        '/',
        authApi,
        userApi,
        roleApi,
        clientApi,
        productApi,
        categoryApi,
        tagApi,
        orderApi,
        deliveryTypeApi,
        clientAnalyticsApi,
        permissionApi
    )
}