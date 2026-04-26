import User from "../../models/User";
import connectDb from "../../middleware/conn";
import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";

const handler = async (req, res) => {
  // ✅ Only allow POST
  if (req.method !== "POST") {
    return res.status(400).json({ error: "This Method Is Not Allowed" });
  }

  try {
    // ✅ Find user safely
    const user = await User.findOne({ email: req.body.email });

    // ❌ Fix: check user BEFORE decrypt
    if (!user) {
      return res
        .status(200)
        .json({ success: false, error: "No User Found" });
    }

    // ❌ Fix: handle missing env variables
    if (!process.env.AES_SECRET || !process.env.JWT_SECRET) {
      return res.status(500).json({
        success: false,
        error: "Server configuration error (missing secrets)",
      });
    }

    // ✅ Decrypt password
    const bytes = CryptoJS.AES.decrypt(
      user.password,
      process.env.AES_SECRET
    );
    const decryptedPassword = bytes.toString(CryptoJS.enc.Utf8);

    // ✅ Check credentials
    if (
      req.body.email === user.email &&
      req.body.password === decryptedPassword
    ) {
      const token = jwt.sign(
        { email: user.email, name: user.name },
        process.env.JWT_SECRET,
        { expiresIn: "2d" }
      );

      return res.status(200).json({
        success: true,
        token,
        email: user.email,
      });
    } else {
      return res
        .status(200)
        .json({ success: false, error: "Invalid Credentials" });
    }
  } catch (error) {
    console.error("Login Error:", error);

    return res.status(500).json({
      success: false,
      error: "Internal Server Error",
    });
  }
};

export default connectDb(handler);
