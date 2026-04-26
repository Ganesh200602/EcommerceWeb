import User from "../../models/User";
import connectDb from "../../middleware/conn";
import jsonwebtoken from "jsonwebtoken";
const handler = async (req, res) => {
  if (req.method == "POST") {
    let token = req.body.token;
    let user = jsonwebtoken.verify(token, process.env.JWT_SECRET);
    // console.log(user);
    let dbuser = await User.findOneAndUpdate(
      { email: user.email },
      {
        address: req.body.address,
        name: req.body.name,
        pincode: req.body.pincode,
        phone: req.body.phone,
      }
    );
    console.log(dbuser);
    res.status(200).json({ success: true });
  } else {
    res.status(400).json({ user: "error" });
  }
};
export default connectDb(handler);
