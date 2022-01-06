"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

require("regenerator-runtime/runtime.js");

var _routes = _interopRequireDefault(require("./module/routes"));

var _Errorhandler = _interopRequireDefault(require("./middleware/Errorhandler"));

var _Cors = _interopRequireDefault(require("./middleware/Cors"));

var _ServerConfig = _interopRequireDefault(require("./config/ServerConfig"));

var _Services = _interopRequireDefault(require("./services/Services"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var App = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var server, start;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            server = (0, _ServerConfig["default"])();
            (0, _Services["default"])(server);
            (0, _routes["default"])(server); //index

            server.route({
              method: 'GET',
              path: '/',
              handler: function () {
                var _handler = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(request, h) {
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          return _context.abrupt("return", {
                            title: "TEST TECH Jubelio Using Api ELEVANIA"
                          });

                        case 1:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));

                function handler(_x, _x2) {
                  return _handler.apply(this, arguments);
                }

                return handler;
              }()
            });
            start = (0, _Cors["default"])(server);
            _context2.next = 7;
            return start;

          case 7:
            console.log('Server running on 3001', server.info.uri);

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function App() {
    return _ref.apply(this, arguments);
  };
}();

(0, _Errorhandler["default"])();
var _default = App;
exports["default"] = _default;