"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var RoutesConfig = {
  get: function get(server, paths, handlers, validate) {
    return server.route({
      method: 'GET',
      path: paths,
      handler: handlers,
      options: validate
    });
  },
  post: function post(server, paths, handlers, validate) {
    return server.route({
      method: 'POST',
      path: paths,
      handler: handlers,
      options: validate
    });
  },
  put: function put(server, paths, handlers, validate) {
    return server.route({
      method: 'PUT',
      path: paths,
      handler: handlers,
      options: validate
    });
  }
};
var _default = RoutesConfig;
exports["default"] = _default;