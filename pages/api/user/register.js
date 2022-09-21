import connectDB from "../../../utils/datebase";
import { UserModel } from "../../../utils/schemeModels";

const registeruser = async (req, res) => {
  try {
    await connectDB();
    await UserModel.create(req.body);
    return res.status(200).json({ message: "ユーザー登録成功" });
  } catch {
    return res.status(400).json({ message: "ユーザー登録失敗" });
  }
};
export default registeruser;
