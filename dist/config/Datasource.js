"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var settings = {
  dialect: 'postgres',
  protocol: 'postgres',
  port: 5432,
  host: 'localhost',
  logging: false
};
var conn = new _sequelize["default"]('jubelio', 'firgiawansaktyo', '', settings);
var _default = conn;
exports["default"] = _default;