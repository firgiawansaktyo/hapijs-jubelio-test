'use strict';

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es.function.name.js");

var _xml2js = require("xml2js");

function register(server, options) {
  var instance = _xml2js.parseString;
  server.expose(options.name, instance);
}

var xml2js = {
  name: 'hapi-xml2js',
  register: register,
  version: '1.0.0'
};
var _default = xml2js;
exports["default"] = _default;