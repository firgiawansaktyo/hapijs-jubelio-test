'use strict';

import { parseString } from "xml2js";

function register(server, options) {
    const instance = parseString;
    server.expose(options.name, instance);
}

const xml2js = {
    name: 'hapi-xml2js',
    register,
    version: '1.0.0',
};

export default xml2js