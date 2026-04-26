import User from "../../models/User";
import connectDb from "../../middleware/conn";
var CryptoJS = require("crypto-js");
var jsonwebtoken = require("jsonwebtoken");
const handler = async (req, res) => {
  if (req.method == "POST") {
    let token = req.body.token;
    let user = jsonwebtoken.verify(token, process.env.JWT_SECRET);
    // console.log(user);
    let dbuser = await User.findOne({ email: user.email });
    var bytes = CryptoJS.AES.decrypt(dbuser.password, process.env.AES_SECRET);
    var decryptedData = bytes.toString(CryptoJS.enc.Utf8);

    if (
      decryptedData == req.body.password &&
      req.body.npassword == req.body.cpassword
    ) {
      let dbuseru = await User.findOneAndUpdate(
        { email: dbuser.email },
        {
          password: CryptoJS.AES.encrypt(
            req.body.cpassword,
            process.env.AES_SECRET
          ).toString(),
        }
      );
      res.status(200).json({ success: true });
      return;
    }
    res.status(200).json({ success: false });
  } else {
    res.status(400).json({ user: "error" });
  }
};
export default connectDb(handler);
