const boom = require("boom");

const Order = require("../models/order");
const pusher = require("../Plugins");

exports.createOrder = async (req, res) => {
   try {
      const { name, quantity, predictedValue, createdTillNow } = req.body;
      const order = new Order({
         name,
         quantity,
         predictedValue,
         createdTillNow
      });
      const result = await order.save();
      await pusher.trigger("fassos", "order", result);
      return result;
   } catch (error) {
      throw boom.boomify(error);
   }
};

exports.getOrders = async (req, res) => {
   try {
      const orders = await Order.find({})
         .select("name quantity createdTillNow predictedValue ")
         .then(res => res)
         .catch(err => {
            throw new Error(err);
         });
      return orders;
   } catch (error) {
      throw boom.boomify(error);
   }
};
