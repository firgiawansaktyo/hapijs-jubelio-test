"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductElevenia = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _Database = _interopRequireDefault(require("../../../config/Database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ProductElevenia = _Database["default"].define('vnd_product', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: true
  },
  created_date: {
    type: 'TIMESTAMP',
    allowNull: true
  },
  updated_date: {
    type: 'TIMESTAMP',
    allowNull: true
  },
  prdnm: {
    type: _sequelize["default"].STRING(255),
    allowNull: false
  },
  prdNo: {
    type: _sequelize["default"].STRING(255),
    allowNull: false
  },
  SKU: {
    type: _sequelize["default"].STRING(255),
    allowNull: false
  },
  prdImg01: {
    type: _sequelize["default"].STRING(50),
    allowNull: false
  },
  htmlDetail: {
    type: _sequelize["default"].STRING(5),
    allowNull: false
  },
  Selprc: {
    type: _sequelize["default"].INTEGER(),
    allowNull: false
  },
  is_active: {
    type: _sequelize["default"].STRING(1),
    defaultValue: 'Y'
  }
}, {
  timestamps: false,
  freezeTableName: true
});

exports.ProductElevenia = ProductElevenia;