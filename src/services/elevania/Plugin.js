import hapiXml2js from "./npm/hapi-xml2js";

export const xml2js = async (server) => (
    await server.register({
        plugin: hapiXml2js,
        options: {
            name: 'parseString',
        },
    })
)