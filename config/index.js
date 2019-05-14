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
   },
   production_database: {
      url:
         "mongodb://heroku_87jd16f3:5cc2la3m4826s0rhmbg1pm04pr@ds031832.mlab.com:31832/heroku_87jd16f3",
      username: "",
      password: ""
   }
};

module.exports = config;
