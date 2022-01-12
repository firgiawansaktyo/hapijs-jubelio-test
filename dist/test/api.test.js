'use strict';

var Lab = require('@hapi/lab');

var _require = require('@hapi/code'),
    expect = _require.expect;

var _exports$lab = exports.lab = Lab.script(),
    afterEach = _exports$lab.afterEach,
    beforeEach = _exports$lab.beforeEach,
    describe = _exports$lab.describe,
    it = _exports$lab.it;

var _require2 = require('../App'),
    init = _require2.init;

describe('GET /getProduct', function () {
  it('return 200 HTTP status code', function (done) {
    db.Todo.remove(function () {
      var options = {
        method: 'GET',
        url: '/getProduct'
      };
      server.inject(options, function (response) {
        expect(response).to.have.property('statusCode', 200);
        done();
      });
    });
  });
});