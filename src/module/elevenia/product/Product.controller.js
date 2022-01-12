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
        const query = `INSERT INTO vnd_product ("prdnm", "prdNo", "SKU", "prdImg01", "htmlDetail", "Selprc", "created_date", "is_active" ) VALUES (:prdnm, :prdNo, :SKU, :prdImg01,:htmlDetail, :Selprc, :created_date, :is_active)`;

        await ProductElevenia.sequelize.query(query, { replacements: { prdnm: dataCreated.prdnm, prdNo: dataCreated.prdNo, SKU: dataCreated.SKU, prdImg01: dataCreated.prdImg01, htmlDetail: dataCreated.htmlDetail, Selprc: dataCreated.Selprc, created_date: dataCreated.created_date, is_active: 'Y' }})

        return ApiResponse.created(201,`Product Elevenia ${dataCreated.prdnm} Berhasil Dibuat`,dataCreated);

    } catch (e) {
        return ApiResponse.internalServerError(e, e.message, e);
    }
}
export const getAllProductFromElevenia = async (request, h) => {
    try {
        const { elevenia } = request.server.plugins['hapi-axios'];
        const { parseString } = request.server.plugins['hapi-xml2js'];
        const { data } = await elevenia.get('/prodservices/product/listing?page='+request.params.pageNumber);
        let JsonData = ""
        parseString(data, function (err, result) {
            JsonData = result;
        });

        let  AllProductElevania  = JsonData
             const getProduct  = async () => {
                        let  ArrayProdukElevania  = AllProductElevania.Products.product
                        for (let i = 0; i < ArrayProdukElevania.length; i++) {
                            let {data} = await elevenia.get('/prodservices/product/details/' + ArrayProdukElevania[i].prdNo[0]);
                            let JsonData = ""
                            parseString(data, function (err, result) {
                                JsonData = result;
                            });
                            let {Product} = JsonData
                            let ImageProduct = ''
                            if (Array.isArray(Product.prdImage01)){
                                ImageProduct = Product.prdImage01[0]
                            }
                            else{
                                ImageProduct = ''
                            }
                            let dataCreated = {
                                created_date:new Date() ,
                                prdnm:Product.prdNm[0] ,
                                prdNo:Product.prdNo[0] ,
                                SKU: Product.sellerPrdCd[0],
                                prdImg01: ImageProduct,
                                htmlDetail: Product.htmlDetail[0],
                                Selprc: Product.selPrc[0]
                            }
                            await ProductElevenia.create(dataCreated)
                        }
                    }
                getProduct()
        return ApiResponse.ok(200, 'Get all Product To Database Success', AllProductElevania)
    } catch (e) {
        return ApiResponse.internalServerError(e, e.message, e);
    }
}