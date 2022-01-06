import Routes from "./module/routes"
import Errorhandler from "./middleware/Errorhandler"
import Cors from "./middleware/Cors"
import Server from "./config/ServerConfig";
import Plugin from "./services/Services";


const App = async () => {

    const server = Server()

    Plugin(server)

    Routes(server)

    //index
    server.route({
        method: 'GET',
        path: '/',
        handler: async (request, h) => ({
            title : "TEST TECH Jubelio Using Api ELEVANIA"
        })
    })

    const start = Cors(server)

    await start;
    console.log('Server running on 3001', server.info.uri);
};

Errorhandler()

export default App





