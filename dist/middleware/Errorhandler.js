"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default() {
  return process.on('unhandledRejection', function (err) {
    console.log(err);
    process.exit(1);
  });
};

exports["default"] = _default;