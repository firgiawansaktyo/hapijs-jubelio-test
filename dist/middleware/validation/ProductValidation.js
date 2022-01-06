"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _joi = _interopRequireDefault(require("@hapi/joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  getProductByIdValidation: {
    params: {
      prdNo: _joi["default"].number().required()
    }
  },
  updateProductValidation: {
    payload: {
      prdnm: _joi["default"].string().required(),
      prdNo: _joi["default"].string().required(),
      SKU: _joi["default"].string().required(),
      prdImg01: _joi["default"].string().required(),
      htmlDetail: _joi["default"].string().required(),
      Selprc: _joi["default"].number().required()
    }
  }
};
exports["default"] = _default;