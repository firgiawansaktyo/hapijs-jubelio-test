const RoutesConfig = {
    get: (server,paths,handlers,validate) =>(
        server.route(
            {
                method: 'GET',
                path: paths,
                handler: handlers,
                options:validate
            }
        )
    ),

    post: (server,paths,handlers,validate) =>(
        server.route(
            {
                method: 'POST',
                path: paths,
                handler: handlers,
                options:validate
            }
        )
    ),

    put: (server,paths,handlers,validate) =>(
        server.route(
            {
                method: 'PUT',
                path: paths,
                handler: handlers,
                options:validate
            }
        )
    )
}

export default RoutesConfig