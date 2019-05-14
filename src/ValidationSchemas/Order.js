const orderSchema = {
   schema: {
      tags: ["Order"],
      body: {
         type: "object",
         description: "Order model for storing food orders",
         properties: {
            name: {
               type: "string",
               description: "Name of Food Item"
            },
            quantity: {
               type: "number",
               description: "Number of Food item to be produced"
            },
            createdTillNow: {
               type: "number",
               description: "Amount of Food item created till now"
            },
            predictedValue: {
               type: "number",
               description: "Estimated food items to be produce"
            }
         }
      }
   }
};
module.exports = orderSchema;
