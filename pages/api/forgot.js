import Forgot from "../../models/Forgot";
import User from "../../models/User";
export default function handler(req, res) {
  if (req.body.sendEmail) {
    let token = hfhdhgunb;
    let forgot = new Forgot({
      email: req.body.email,
      token: token,
    });
    <p>
      {/* <a href="http://localhost/forgot?token=${token}">
        Click Here To reset password
      </a> */}
    </p>;
  } else {
  }

  res.status(200).json({ success: true });
}
