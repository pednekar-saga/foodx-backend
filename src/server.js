// const { PORT } = require("../config");
const PORT = process.env.PORT || 4000;
const routes = require("./routes/orderRoutes").routes;

/**
 * Initialized fastify plugin
 */
const server = require("fastify")({
   logger: true
});

/**
 * Register fastify plugins here
 */
server.register(require("fastify-cors"));

/**
 * Connect mongo Database
 */

const connect = require("./db/config.js").connect(server);

/**
 * Register all routes here
 */
routes.map(route => {
   server.route(route);
});

/**
 *
 * Listen to the given PORT
 */

const start = async () => {
   try {
      server.listen(PORT, "0.0.0.0");
      server.log.info(`Server is running `);
   } catch (error) {
      server.log.error(error);
      process.exit(0);
   }
};
start();
