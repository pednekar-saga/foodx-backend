const Pusher = require("pusher");
const { PORT } = require("../config");
const { APP_ID, KEY, SECRET, CLUSTER } = require("../config").pusher;

const fastify = require("fastify")({
   logger: true
});

const connect = require("./db/config.js").connect(fastify);
/**
 *
 * Pusher Configurations
 */

const pusher = new Pusher({
   appId: APP_ID,
   key: KEY,
   secret: SECRET,
   cluster: CLUSTER
});

// app.post("/message", (req, res) => {
//    const count = req.body;
//    pusher.trigger("fassos", "order", count);
//    res.json(count);
// });

/**
 *
 * Listen to the given PORT
 */

const start = async () => {
   try {
      fastify.listen(PORT);
      fastify.log.info(`Server is running on ${PORT}`);
   } catch (error) {
      fastify.log.error(error);
      process.exit(0);
   }
};
start();
