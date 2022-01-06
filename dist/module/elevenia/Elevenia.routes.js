"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _RoutesConfig = _interopRequireDefault(require("../../config/RoutesConfig"));

var _Product = require("./product/Product.controller");

var _EleveniaProduct = require("../../middleware/validation/EleveniaProduct.validation");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Elevenia_routes = function Elevenia_routes(server) {
  _RoutesConfig["default"].get(server, '/getProductFromElevenia/{prdNo}', _Product.getProductFromElevenia, _EleveniaProduct.getProductFromEleveniaValidation);

  return _RoutesConfig["default"];
};

var _default = Elevenia_routes;
exports["default"] = _default;