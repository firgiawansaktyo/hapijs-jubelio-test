"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _hapi = _interopRequireDefault(require("@hapi/hapi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default() {
  return _hapi["default"].server({
    port: 3001,
    host: 'localhost'
  });
};

exports["default"] = _default;