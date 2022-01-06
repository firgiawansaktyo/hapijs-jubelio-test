import Elevenia from "./elevenia/Elevenia.routes";
import Product from "./product/Product.routes";

const routes = (server) => {
    Elevenia(server)
    Product(server)
}

export default routes
