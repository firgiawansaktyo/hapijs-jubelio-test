"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Elevenia = _interopRequireDefault(require("./elevenia/Elevenia.routes"));

var _Product = _interopRequireDefault(require("./product/Product.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var routes = function routes(server) {
  (0, _Elevenia["default"])(server);
  (0, _Product["default"])(server);
};

var _default = routes;
exports["default"] = _default;