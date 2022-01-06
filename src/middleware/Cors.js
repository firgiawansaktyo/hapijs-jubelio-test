import HapiCors from "hapi-cors"

const Cors = async (server) => {
    try {
        await server.register({
            plugin: HapiCors,
            options: {
                origins: ['http://localhost:3000']
            }
        })

        await server.start();
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

export default Cors