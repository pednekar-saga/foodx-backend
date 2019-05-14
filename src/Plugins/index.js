const Pusher = require("pusher");

const { APP_ID, KEY, SECRET, CLUSTER } = require("../../config").pusher;

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

module.exports = pusher;
