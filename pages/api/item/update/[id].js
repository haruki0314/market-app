import connectDB from "../../../../utils/datebase";
import { ItemModel } from "../../../../utils/schemeModels";
const updateItem = async (req, res) => {
  try {
    await connectDB();
    await ItemModel.updateOne({ _id: req.query.id }, req.body);
    return res.status(200).send({
      message: "アイテム編集成功",
    });
  } catch {
    return res.status(400).json({ message: "アイテム編集失敗" });
  }
};
export default updateItem;
