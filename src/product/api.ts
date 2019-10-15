import { createRouter } from "src/_helpers/api";
import productImportEndpoint from "./_endpoints/import/api";
import productExportEndpoint from "./_endpoints/export/api";
import productGetEndpoint from "./_endpoints/get/api";
import productGetFilteredEndpoint from "./_endpoints/get-filtered/api";
import productAddEndpoint from "./_endpoints/add/api";

export default function productApi() {
    return createRouter(
        '/product',
        productExportEndpoint,
        productGetEndpoint,
        productGetFilteredEndpoint,
        productImportEndpoint,
        productAddEndpoint
    )
}