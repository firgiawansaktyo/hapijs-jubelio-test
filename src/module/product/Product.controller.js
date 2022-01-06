import ApiResponse from "../../utils/ApiResponse"
import { Product } from "./Product.model";


export const getProduct = async (request, h) => {
    try {
        let data = await Product.findAll({
            where: { is_active: 'Y' }
        })
        return ApiResponse.ok(200, 'Get all Product success', data)
    } catch (e) {
        return ApiResponse.internalServerError(e, 'Internal server error', e.message)
    }
}

export const getProductDetail = async (request, h) => {
    try {
        let data = await Product.findOne({
            where: { id: request.params.id, is_active: 'Y' }
        })
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
        let data = await Product.update(payload, { where: { id: request.params.id } })
        
        return ApiResponse.ok(200, 'Updated Product success', data)
    } catch (e) {
        return ApiResponse.internalServerError(e, 'Internal server error', e.message)
    }
}
