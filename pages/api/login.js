import User from "../../models/User";
import connectDb from "../../middleware/conn";
import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";

const handler = async (req, res) => {

  // ❌ Only POST allowed
  if (req.method !== "POST") {
    return res.status(400).json({ error: "This Method Is Not Allowed" });
  }

  try {
    // ✅ Find user
    const user = await User.findOne({ email: req.body.email });

    // ✅ FIX: check user BEFORE decrypt
    if (!user) {
      return res.status(200).json({
        success: false,
        error: "No User Found",
      });
    }

    // ✅ FIX: check env variables
    if (!process.env.AES_SECRET || !process.env.JWT_SECRET) {
      return res.status(500).json({
        success: false,
        error: "Server configuration error",
      });
    }

    // ✅ Decrypt password
    const bytes = CryptoJS.AES.decrypt(
      user.password,
      process.env.AES_SECRET
    );

    const decryptedPassword = bytes.toString(CryptoJS.enc.Utf8);

    // ✅ Validate credentials
    if (req.body.password === decryptedPassword) {
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
      return res.status(200).json({
        success: false,
        error: "Invalid Credentials",
      });
    }

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      error: "Internal Server Error",
    });
  }
};

export default connectDb(handler);
