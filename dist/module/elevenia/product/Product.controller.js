"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProductFromElevenia = exports.getAllProductFromElevenia = void 0;

require("regenerator-runtime/runtime.js");

require("core-js/modules/es.date.to-string.js");

require("core-js/modules/es.array.is-array.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

var _ApiResponse = _interopRequireDefault(require("../../../utils/ApiResponse"));

var _Product = require("./Product.model");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getProductFromElevenia = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(request, h) {
    var elevenia, parseString, _yield$elevenia$get, data, JsonData, _JsonData, Product, dataCreated, query;

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
            query = "INSERT INTO vnd_product (\"prdnm\", \"prdNo\", \"SKU\", \"prdImg01\", \"htmlDetail\", \"Selprc\", \"created_date\", \"is_active\" ) VALUES (:prdnm, :prdNo, :SKU, :prdImg01,:htmlDetail, :Selprc, :created_date, :is_active)";
            _context.next = 14;
            return _Product.ProductElevenia.sequelize.query(query, {
              replacements: {
                prdnm: dataCreated.prdnm,
                prdNo: dataCreated.prdNo,
                SKU: dataCreated.SKU,
                prdImg01: dataCreated.prdImg01,
                htmlDetail: dataCreated.htmlDetail,
                Selprc: dataCreated.Selprc,
                created_date: dataCreated.created_date,
                is_active: 'Y'
              }
            });

          case 14:
            return _context.abrupt("return", _ApiResponse["default"].created(201, "Product Elevenia ".concat(dataCreated.prdnm, " Berhasil Dibuat"), dataCreated));

          case 17:
            _context.prev = 17;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", _ApiResponse["default"].internalServerError(_context.t0, _context.t0.message, _context.t0));

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 17]]);
  }));

  return function getProductFromElevenia(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getProductFromElevenia = getProductFromElevenia;

var getAllProductFromElevenia = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(request, h) {
    var elevenia, parseString, _yield$elevenia$get2, data, JsonData, AllProductElevania, getProduct;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            elevenia = request.server.plugins['hapi-axios'].elevenia;
            parseString = request.server.plugins['hapi-xml2js'].parseString;
            _context3.next = 5;
            return elevenia.get('/prodservices/product/listing?page=' + request.params.pageNumber);

          case 5:
            _yield$elevenia$get2 = _context3.sent;
            data = _yield$elevenia$get2.data;
            JsonData = "";
            parseString(data, function (err, result) {
              JsonData = result;
            });
            AllProductElevania = JsonData;

            getProduct = /*#__PURE__*/function () {
              var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var ArrayProdukElevania, i, _yield$elevenia$get3, _data, _JsonData2, _JsonData3, Product, ImageProduct, dataCreated;

                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        ArrayProdukElevania = AllProductElevania.Products.product;
                        i = 0;

                      case 2:
                        if (!(i < ArrayProdukElevania.length)) {
                          _context2.next = 18;
                          break;
                        }

                        _context2.next = 5;
                        return elevenia.get('/prodservices/product/details/' + ArrayProdukElevania[i].prdNo[0]);

                      case 5:
                        _yield$elevenia$get3 = _context2.sent;
                        _data = _yield$elevenia$get3.data;
                        _JsonData2 = "";
                        parseString(_data, function (err, result) {
                          _JsonData2 = result;
                        });
                        _JsonData3 = _JsonData2, Product = _JsonData3.Product;
                        ImageProduct = '';

                        if (Array.isArray(Product.prdImage01)) {
                          ImageProduct = Product.prdImage01[0];
                        } else {
                          ImageProduct = '';
                        }

                        dataCreated = {
                          created_date: new Date(),
                          prdnm: Product.prdNm[0],
                          prdNo: Product.prdNo[0],
                          SKU: Product.sellerPrdCd[0],
                          prdImg01: ImageProduct,
                          htmlDetail: Product.htmlDetail[0],
                          Selprc: Product.selPrc[0]
                        };
                        _context2.next = 15;
                        return _Product.ProductElevenia.create(dataCreated);

                      case 15:
                        i++;
                        _context2.next = 2;
                        break;

                      case 18:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }));

              return function getProduct() {
                return _ref3.apply(this, arguments);
              };
            }();

            getProduct();
            return _context3.abrupt("return", _ApiResponse["default"].ok(200, 'Get all Product To Database Success', AllProductElevania));

          case 15:
            _context3.prev = 15;
            _context3.t0 = _context3["catch"](0);
            return _context3.abrupt("return", _ApiResponse["default"].internalServerError(_context3.t0, _context3.t0.message, _context3.t0));

          case 18:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 15]]);
  }));

  return function getAllProductFromElevenia(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getAllProductFromElevenia = getAllProductFromElevenia;