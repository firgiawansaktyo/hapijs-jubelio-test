import Routes from "../../config/RoutesConfig";
import {
    getProduct,
    getProductDetail,
    updateProduct
} from "./Product.controller";
import { getProductByIdValidation , updateProductValidation} from "../../middleware/validation/ProductValidation";

const Product_routes = (server) => {
    Routes.get(server, '/getProduct', getProduct)
    // Routes.post(server, '/createProduct', createProduct)
    Routes.get(server, '/getProductDetail/{id}', getProductDetail, getProductByIdValidation)
    Routes.post(server, '/updateProduct/{id}', updateProduct, updateProductValidation)

    return Routes
}

export default Product_routes