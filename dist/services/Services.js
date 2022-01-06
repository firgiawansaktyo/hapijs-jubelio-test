"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _URLApi = _interopRequireDefault(require("./elevania/URLApi"));

var _Plugin = require("./elevania/Plugin");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(server) {
  (0, _Plugin.xml2js)(server);
  (0, _URLApi["default"])(server);
};

exports["default"] = _default;