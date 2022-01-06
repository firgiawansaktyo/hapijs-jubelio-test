import Hapi from "@hapi/hapi"

export default () => (
    Hapi.server({
        port: 3001,
        host: 'localhost'
    })
) 