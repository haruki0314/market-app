import connectDB from "../../../utils/datebase";
import { UserModel } from "../../../utils/schemeModels";

const loginUser = async (req, res) => {
  try {
    await connectDB();
    console.log(req.body.email);
    const sagedUserData = await UserModel.findOne({ email: req.body.email });
    console.log(sagedUserData);
    return res.staus(200).json({ message: "ログイン成功" });
  } catch {
    return res.status(400).json({ message: "ログイン失敗" });
  }
};
export default loginUser;
