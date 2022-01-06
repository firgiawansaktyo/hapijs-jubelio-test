import Routes from "../../config/RoutesConfig";
import { getProductFromElevenia } from "./product/Product.controller";
import { getProductFromEleveniaValidation } from "../../middleware/validation/EleveniaProduct.validation";

const Elevenia_routes = (server) => {
    Routes.get(server, '/getProductFromElevenia/{prdNo}', getProductFromElevenia, getProductFromEleveniaValidation)

    return Routes
}

export default Elevenia_routes