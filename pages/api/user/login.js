import connectDB from "../../../utils/datebase";
import { UserModel } from "../../../utils/schemeModels";

const loginUser = async (req, res) => {
  try {
    await connectDB();
    const savedUserData = await UserModel.findOne({ email: req.body.email });
    console.log(req.body.email);
    console.log(savedUserData);
    if (savedUserData) {
      console.log("一個め");
      console.log(`${req.body.password}--${savedUserData.password}`);
      const a = req.body.password;
      const b = savedUserData.password;
      console.log("これ");
      if (a === b) {
        return res.staus(200).json({ message: "ログイン成功" });
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
    console.log("エラ〜発生");
    return res.status(400).json({ message: "ログイン失敗" });
  }
};
export default loginUser;
