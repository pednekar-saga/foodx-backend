const Pusher = require("pusher");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
const pusher = new Pusher({
   appId: "780756",
   key: "93d33b6256a37fd6c03e",
   secret: "48fd016514f6a8b44659",
   cluster: "ap2",
   encrypted: true
});

app.set("PORT", process.env.PORT || 4000);

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
// pusher.trigger("my-channel", "my-event", {
//    message: "hello world"
// });

app.listen(app.get("PORT"), () => {
   console.log(`Server is running on ${app.get("PORT")}`);
});
