// import Product from "../../models/Product";
// import connectDb from "../../middleware/conn";
// const handler = async (req, res) => {
//   if (req.method === "POST") {
//     for (let i = 0; i < req.body.length; i++) {
//       let P = new Product({
//         title: req.body[i].title,
//         slug: req.body[i].slug,
//         desc: req.body[i].desc,
//         img: req.body[i].img,
//         category: req.body[i].category,
//         size: req.body[i].size,
//         color: req.body[i].color,
//         price: req.body[i].price,
//         avaQty: req.body[i].avaQty,
//       });
//       P.save();
//     }
//     res.status(200).json({ success: "success" });
//   } else {
//     res.status(400).json({ error: "This Method Is Not Allowed" });
//   }
// };
// export default connectDb(handler);

import Product from "../../models/Product";
import connectDb from "../../middleware/conn";

const handler = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(400).json({ error: "Method not allowed" });
  }

  try {
    const product = await Product.create(req.body);
    res.status(200).json({ success: true, product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message });
  }
};

export default connectDb(handler);
