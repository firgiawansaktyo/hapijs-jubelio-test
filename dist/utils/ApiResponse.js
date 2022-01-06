"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es.date.to-string.js");

var ApiResponse = {
  build: function build(res, status, code, message, data) {
    return _build(res, status, code, message, data);
  },
  ok: function ok(res) {
    var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Ok';
    var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return _build(res, 200, message, data);
  },
  created: function created(res) {
    var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Data created';
    var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return _build(res, 201, message, data);
  },
  accepted: function accepted(res) {
    var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Accepted';
    var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return _build(res, 202, message, data);
  },
  noContent: function noContent(res) {
    var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'No content';
    var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return _build(res, 204, message, data);
  },
  badRequest: function badRequest(res) {
    var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Bad request';
    var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return error(res, 400, message, data);
  },
  forbidden: function forbidden(res) {
    var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Forbidden';
    var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return error(res, 403, message, data);
  },
  notAcceptable: function notAcceptable(res) {
    var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Not Acceptable';
    var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return error(res, 406, message, data);
  },
  conflict: function conflict(res) {
    var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Conflict';
    var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return error(res, 409, message, data);
  },
  unAuthorized: function unAuthorized(res) {
    var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Unauthorized';
    var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return error(res, 401, message, data);
  },
  notFound: function notFound(res) {
    var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Data not found';
    var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return error(res, 404, message, data);
  },
  unProcessableEntity: function unProcessableEntity(res) {
    var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Unprocessable Entity';
    var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return error(res, 422, message, data);
  },
  internalServerError: function internalServerError(res) {
    var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Internal Server Error';
    var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return error(res, 500, message, data);
  },
  serviceUnAvailable: function serviceUnAvailable(res) {
    var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Service Unavailable';
    var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return error(res, 503, message, data);
  },
  notImplemented: function notImplemented(res) {
    var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Not Implemented';
    var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return error(res, 501, message, data);
  },
  badGateway: function badGateway(res) {
    var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Bad Gateway';
    var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return error(res, 502, message, data);
  },
  unknownError: function unknownError(res) {
    var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Unknown Error';
    var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return error(res, 505, message, data);
  }
};

var _build = function _build(res, code, message, data) {
  var response = {
    success: true,
    status: code,
    timestamp: new Date().getTime(),
    message: message,
    count: data.length,
    data: data
  };
  return response;
};

var error = function error(res, code, message, data) {
  // data = (!data.errors) ? data.errors : { name: data.name, message: data.message }
  var response = {
    success: false,
    status: code,
    timestamp: new Date().getTime(),
    message: message,
    count: data.length,
    error: data
  };
  return response;
};

var _default = ApiResponse;
exports["default"] = _default;