import connectDB from "../../../../utils/datebase";
import { ItemModel } from "../../../../utils/schemeModels";
const deleteItem = async (req, res) => {
  try {
    await connectDB();
    await ItemModel.deleteOne({ _id: req.query.id }, req.body);
    return res.status(200).send({
      message: "アイテム消去成功",
    });
  } catch {
    return res.status(400).json({ message: "アイテム消去失敗" });
  }
};
export default deleteItem;
