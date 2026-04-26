export const dynamic = 'force-dynamic';
import User from "../../models/User";
import connectDb from "../../middleware/conn";
var CryptoJS = require("crypto-js");
var jwt = require("jsonwebtoken");
const handler = async (req, res) => {
  if (req.method === "POST") {
    let user = await User.findOne({ email: req.body.email });
    var bytes = CryptoJS.AES.decrypt(user.password, process.env.AES_SECRET);
    var decryptedData = bytes.toString(CryptoJS.enc.Utf8);
    // console.log(decryptedData);
    if (user) {
      if (req.body.email == user.email && req.body.password == decryptedData) {
        var token = jwt.sign(
          { email: user.email, name: user.name },
          process.env.JWT_SECRET,
          {
            expiresIn: "2d",
          }
        );
        res.status(200).json({ success: true, token, email: user.email });
      } else {
        res.status(200).json({ success: false, error: "Invalid Credentials" });
      }
    } else {
      res.status(200).json({ success: false, error: "No User Found" });
    }
  } else {
    res.status(400).json({ error: "This Method Is Not Allowed" });
  }
};
export default connectDb(handler);
