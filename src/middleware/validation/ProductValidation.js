import Joi from "@hapi/joi"

export default {
    getProductByIdValidation:{
        params: {
            prdNo: Joi.number().required()
        }
    },
    updateProductValidation:{
        payload: {
            prdnm: Joi.string().required(),
            prdNo: Joi.string().required(),
            SKU: Joi.string().required(),
            prdImg01: Joi.string().required(),
            htmlDetail: Joi.string().required(),
            Selprc: Joi.number().required()
        }
    }
}