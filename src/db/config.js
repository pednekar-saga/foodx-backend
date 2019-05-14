const mongoose = require("mongoose");
// const { url } = require("../../config").database;
const { url } = require("../../config/index").production_database;

const db = {
   connect: async fastify => {
      try {
         mongoose
            .connect(url, {
               useNewUrlParser: true
            })
            .then(() => {
               fastify.log.info("Mongo is connected successfully");
            })
            .catch(err => {
               throw new Error(err);
            });
      } catch (error) {
         fastify.log.error(error);
         process.exit(0);
      }
   }
};

module.exports = db;
