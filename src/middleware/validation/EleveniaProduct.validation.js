import Joi from "@hapi/joi"

export default {
    getProductFromEleveniaValidation:{
        params: {
            prdNo: Joi.number().required()
        }
    }
}