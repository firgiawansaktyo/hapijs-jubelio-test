"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProductFromElevenia = void 0;

require("regenerator-runtime/runtime.js");

require("core-js/modules/es.date.to-string.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

var _ApiResponse = _interopRequireDefault(require("../../../utils/ApiResponse"));

var _Product = require("./Product.model");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getProductFromElevenia = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(request, h) {
    var elevenia, parseString, _yield$elevenia$get, data, JsonData, _JsonData, Product, dataCreated;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            elevenia = request.server.plugins['hapi-axios'].elevenia;
            parseString = request.server.plugins['hapi-xml2js'].parseString;
            _context.next = 5;
            return elevenia.get('/prodservices/product/details/' + request.params.prdNo);

          case 5:
            _yield$elevenia$get = _context.sent;
            data = _yield$elevenia$get.data;
            JsonData = "";
            parseString(data, function (err, result) {
              JsonData = result;
            });
            _JsonData = JsonData, Product = _JsonData.Product;
            dataCreated = {
              created_date: new Date(),
              prdnm: Product.prdNm[0],
              prdNo: Product.prdNo[0],
              SKU: Product.sellerPrdCd[0],
              prdImg01: Product.prdImage01[0],
              htmlDetail: Product.htmlDetail[0],
              Selprc: Product.selPrc[0]
            };
            _context.next = 13;
            return _Product.ProductElevenia.create(dataCreated);

          case 13:
            return _context.abrupt("return", _ApiResponse["default"].created(201, "Product Elevenia ".concat(dataCreated.prdnm, " Berhasil Dibuat"), dataCreated));

          case 16:
            _context.prev = 16;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", _ApiResponse["default"].internalServerError(_context.t0, _context.t0.message, _context.t0));

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 16]]);
  }));

  return function getProductFromElevenia(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getProductFromElevenia = getProductFromElevenia;