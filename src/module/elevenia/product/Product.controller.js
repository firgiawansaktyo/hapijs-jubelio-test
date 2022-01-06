import ApiResponse from "../../../utils/ApiResponse"

import { ProductElevenia } from "./Product.model";

export const getProductFromElevenia = async (request, h) => {
    try {
        const { elevenia } = request.server.plugins['hapi-axios'];
        const { parseString } = request.server.plugins['hapi-xml2js'];

        const { data } = await elevenia.get('/prodservices/product/details/'+request.params.prdNo);
        
        let JsonData = ""
        parseString(data, function (err, result) {
            JsonData = result;
        });

        let {Product} = JsonData
        let dataCreated = {
            created_date:new Date() ,
            prdnm:Product.prdNm[0] ,
            prdNo:Product.prdNo[0] ,
            SKU: Product.sellerPrdCd[0],
            prdImg01: Product.prdImage01[0],
            htmlDetail: Product.htmlDetail[0],
            Selprc: Product.selPrc[0]
        }
        
        await ProductElevenia.create(dataCreated)

        return ApiResponse.created(201,`Product Elevenia ${dataCreated.prdnm} Berhasil Dibuat`,dataCreated);

    } catch (e) {
        return ApiResponse.internalServerError(e, e.message, e);
    }
}