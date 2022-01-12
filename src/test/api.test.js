'use strict';

const Lab = require('@hapi/lab');
const { expect } = require('@hapi/code');
const { afterEach, beforeEach, describe, it } = exports.lab = Lab.script();
const { init } = require('../App');

describe('GET /getProduct', () => {
    it('return 200 HTTP status code', (done) => {
        db.Todo.remove(() => {
            let options = {
                method: 'GET',
                url: '/getProduct',
            };

            server.inject(options, (response) => {
                expect(response).to.have.property('statusCode', 200);
                done();
            });
        });
    });
});
