import ApiResponse from "../../utils/ApiResponse"
import { Product } from "./Product.model";


export const getProduct = async (request, h) => {
    try {
        let data = await Product.sequelize.query("SELECT * FROM vnd_product WHERE is_active='Y' ", { type: Product.sequelize.QueryTypes.SELECT})

        return ApiResponse.ok(200, 'Get all Product success', data)
    } catch (e) {
        return ApiResponse.internalServerError(e, 'Internal server error', e.message)
    }
}

export const getProductDetail = async (request, h) => {
    try {
        let data = await Product.sequelize.query("SELECT * FROM vnd_product WHERE id=:id AND is_active='Y' ", { replacements: { id: request.params.id },  type: Product.sequelize.QueryTypes.SELECT})
        return ApiResponse.ok(200, 'Get Product by id success', data)
    } catch (e) {
        return ApiResponse.internalServerError(e, 'Internal server error', e.message)
    }
}

export const updateProduct = async (request, h) => {
    // let payload = JSON.parse(request.payload)
    let payload = {
        ...request.payload,
        updated_date: new Date()
    }
    try {
        const query = `UPDATE vnd_product SET "prdnm"= :prdnm , "SKU"= :SKU, "prdImg01"= :prdImg01, "htmlDetail"= :htmlDetail, "Selprc"= :Selprc, "is_active"= :is_active, "updated_date"= :updated_date  WHERE id=:id`;
        let data =
            await Product.sequelize.query(query, { replacements: { id: request.params.id , prdnm: payload.prdnm, SKU: payload.SKU, prdImg01: payload.prdImg01, htmlDetail: payload.htmlDetail, Selprc: payload.Selprc, is_active: payload.is_active, updated_date: payload.updated_date }, type: Product.sequelize.QueryTypes.UPDATE})

        return ApiResponse.ok(200, 'Updated Product success', data)
    } catch (e) {
        return ApiResponse.internalServerError(e, 'Internal server error', e.message)
    }
}
