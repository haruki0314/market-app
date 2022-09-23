import connectDB from "../../../utils/datebase";
import { UserModel } from "../../../utils/schemeModels";
import jwt from "jsonwebtoken";

const secret_key = "nextmarket";

const loginUser = async (req, res) => {
  try {
    await connectDB();
    const savedUserData = await UserModel.findOne({ email: req.body.email });
    if (savedUserData) {
      console.log(`${req.body.password}--${savedUserData.password}`);
      const a = req.body.password;
      const b = savedUserData.password;
      if (req.body.password === savedUserData.password) {
        const payload = {
          email: req.body.email,
        };
        const token = jwt.sign(payload, secret_key, { expiresIn: "23h" });

        console.log(token);
        return res.status(200).json({ message: "ログイン成功", token: token });
      } else {
        return res
          .status(400)
          .json({ message: "ログイン失敗：パスワードが間違い" });
      }
    } else {
      return res
        .status(400)
        .json({ message: "ログイン失敗：ユーザーを登録してください" });
    }
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "ログイン失敗" });
  }
};
export default loginUser;
