import Order from "../../models/Order";
import connectDb from "../../middleware/conn";
import Product from "../../models/Product";
import PaytmChecksum from "paytmchecksum";
import { Transaction } from "mongodb";

const handler = async (req, res) => {
  let order;
  // check tempering
  var paytmChecksum = "";

  var paytmParams = {};
  const received_data = req.body;
  for (var key in received_data) {
    if (key == "CHECKSUMHASH") {
      paytmChecksum = received_data[key];
    } else {
      paytmParams[key] = received_data[key];
    }
  }
  var isVerifySignature = PaytmChecksum.verifySignature(
    paytmParams,
    process.env.NEXT_PUBLIC_PAYTM_KEY,
    paytmChecksum
  );
  if (!isVerifySignature) {
    res.status(500).send("Some error occured");
    return;
  }
  if (req.body.STATUS == "TXN_SUCCESS") {
    order = await Order.findOneAndUpdate(
      { orderId: req.body.ORDERID },
      {
        status: "Paid",
        paymentInfo: JSON.stringify(req.body),
        trasactionid: req.body.TXNID,
      }
    );
    let products = order.products;
    for (let slug in products) {
      await Product.findOneAndUpdate(
        { slug: slug },
        { $inc: { avaQty: -products[slug].qty } }
      );
    }
  } else if (req.body.STATUS == "PENDING") {
    order = await Order.findOneAndUpdate(
      { orderId: req.body.ORDERID },
      {
        status: "Pending",
        paymentInfo: JSON.stringify(req.body),
        trasactionid: req.body.TXNID,
      }
    );
  }
  // TransactionId

  res.redirect(`/order?clearCart=1&id=` + order._id, 200);
  // res.status(200).json({ body: req.body });
};

export default connectDb(handler);


