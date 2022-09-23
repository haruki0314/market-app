import connectDB from "../../../../utils/datebase";
import { ItemModel } from "../../../../utils/schemeModels";
import auth from "../../user/auth";

const deleteItem = async (req, res) => {
  try {
    await connectDB();
    const singleItem = await ItemModel.findById(req.query.id);
    if (singleItem.email === req.body.email) {
      await ItemModel.deleteOne({ _id: req.query.id }, req.body);
      return res.status(200).send({
        message: "アイテム消去成功",
      });
    } else {
      throw new Error();
    }
  } catch {
    return res.status(400).json({ message: "アイテム消去失敗" });
  }
};
export default auth(deleteItem);
