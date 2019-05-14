const config = {
   PORT: process.env.PORT || 4000,
   pusher: {
      APP_ID: "780756",
      KEY: "93d33b6256a37fd6c03e",
      SECRET: "48fd016514f6a8b44659",
      CLUSTER: "ap2"
   },
   database: {
      url: "mongodb://localhost:27017/foodx"
   }
};

module.exports = config;
