//書き込みを行うコード
import connectDB from "../utils/datebase";

const createItem = async (req, res) => {
  try {
    await connectDB();
    console.log(req.body);
    //DB書き込みを行うコード
    await ItemModel.create(req.body);
    return res.status(200).json({ message: "アイテム作成成功" });
  } catch (err) {
    return res.status(400).json({ message: "アイテム作成失敗" });
  }
};
export default createItem;
