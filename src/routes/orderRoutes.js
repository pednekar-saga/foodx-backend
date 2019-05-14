const orderController = require("../controllers/OrderController");
const orderSchema = require("../ValidationSchemas/Order").schema;
exports.routes = [
   {
      method: "POST",
      url: "/api/order",
      schema: orderSchema,
      handler: orderController.createOrder
   },
   {
      method: "GET",
      url: "/api/orders",
      handler: orderController.getOrders
   }
];
