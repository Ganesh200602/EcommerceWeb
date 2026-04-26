const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    orderId: { type: String, required: true },
    paymentInfo: { type: String, default: "" },
    products: {
      type: Object,
      requierd: true,
    },

    address: { type: String, required: true },
    state: { type: String },
    city: { type: String },
    phone: { type: String, required: true },
    pincode: { type: String, required: true },
    amount: { type: Number, required: true },
    trasactionid: { type: String, default: "" },
    status: { type: String, required: true, default: "Initiated" },
    deliveryStatus: { type: String, required: true, default: "unShipped" },
  },
  { timestamps: true }
);
// mongoose.models = {};

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);
