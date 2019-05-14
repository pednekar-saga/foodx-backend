const Pusher = require("pusher");
const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config");
const { APP_ID, KEY, SECRET, CLUSTER } = require("./config").pusher;
const app = express();

/**
 * Set PORT for node APP
 *
 */

app.set("PORT", PORT);

/**
 * Apply middleware
 */

app.use(bodyParser.json());

/**
 *
 * Pusher Configurations
 */

const pusher = new Pusher({
   appId: APP_ID,
   key: KEY,
   secret: SECRET,
   cluster: CLUSTER,
   encrypted: true
});

/**
 * Allow all API's for All origin to fix cors issue
 */

app.all("/*", function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "X-Requested-With");
   res.header("Access-Control-Allow-Headers", "Content-Type");
   next();
});

app.post("/message", (req, res) => {
   const count = req.body;
   pusher.trigger("fassos", "order", count);
   res.json(count);
});

/**
 *
 * Listen to the given PORT
 */

app.listen(app.get("PORT"), () => {
   console.log(`Server is running on ${app.get("PORT")}`);
});
