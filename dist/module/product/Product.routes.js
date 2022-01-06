"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _RoutesConfig = _interopRequireDefault(require("../../config/RoutesConfig"));

var _Product = require("./Product.controller");

var _ProductValidation = require("../../middleware/validation/ProductValidation");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Product_routes = function Product_routes(server) {
  _RoutesConfig["default"].get(server, '/getProduct', _Product.getProduct); // Routes.post(server, '/createProduct', createProduct)


  _RoutesConfig["default"].get(server, '/getProductDetail/{id}', _Product.getProductDetail, _ProductValidation.getProductByIdValidation);

  _RoutesConfig["default"].post(server, '/updateProduct/{id}', _Product.updateProduct, _ProductValidation.updateProductValidation);

  return _RoutesConfig["default"];
};

var _default = Product_routes;
exports["default"] = _default;