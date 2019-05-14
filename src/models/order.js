const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
   name: String,
   quantity: {
      type: Number,
      default: 0
   },
   createdTillNow: {
      type: Number,
      default: 0
   },
   predictedValue: {
      type: Number,
      default: 0
   }
});

module.exports = mongoose.model("Order", orderSchema);
