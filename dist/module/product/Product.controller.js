"use strict";

require("core-js/modules/es.object.define-property.js");

require("core-js/modules/es.object.keys.js");

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.array.filter.js");

require("core-js/modules/es.object.get-own-property-descriptor.js");

require("core-js/modules/es.array.for-each.js");

require("core-js/modules/web.dom-collections.for-each.js");

require("core-js/modules/es.object.get-own-property-descriptors.js");

require("core-js/modules/es.object.define-properties.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateProduct = exports.getProductDetail = exports.getProduct = void 0;

require("core-js/modules/es.date.to-string.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

require("regenerator-runtime/runtime.js");

var _ApiResponse = _interopRequireDefault(require("../../utils/ApiResponse"));

var _Product = require("./Product.model");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getProduct = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(request, h) {
    var data;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Product.Product.findAll({
              where: {
                is_active: 'Y'
              }
            });

          case 3:
            data = _context.sent;
            return _context.abrupt("return", _ApiResponse["default"].ok(200, 'Get all Product success', data));

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", _ApiResponse["default"].internalServerError(_context.t0, 'Internal server error', _context.t0.message));

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function getProduct(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getProduct = getProduct;

var getProductDetail = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(request, h) {
    var data;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _Product.Product.findOne({
              where: {
                id: request.params.id,
                is_active: 'Y'
              }
            });

          case 3:
            data = _context2.sent;
            return _context2.abrupt("return", _ApiResponse["default"].ok(200, 'Get Product by id success', data));

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", _ApiResponse["default"].internalServerError(_context2.t0, 'Internal server error', _context2.t0.message));

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));

  return function getProductDetail(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getProductDetail = getProductDetail;

var updateProduct = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(request, h) {
    var payload, data;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            // let payload = JSON.parse(request.payload)
            payload = _objectSpread(_objectSpread({}, request.payload), {}, {
              updated_date: new Date()
            });
            _context3.prev = 1;
            _context3.next = 4;
            return _Product.Product.update(payload, {
              where: {
                id: request.params.id
              }
            });

          case 4:
            data = _context3.sent;
            return _context3.abrupt("return", _ApiResponse["default"].ok(200, 'Updated Product success', data));

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](1);
            return _context3.abrupt("return", _ApiResponse["default"].internalServerError(_context3.t0, 'Internal server error', _context3.t0.message));

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 8]]);
  }));

  return function updateProduct(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.updateProduct = updateProduct;