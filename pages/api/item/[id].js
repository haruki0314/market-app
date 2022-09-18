import connectDB from "../utils/datebase";
import { ItemModel } from "../utils/schemeModels";

const getSigleItem = async (req, res) => {
  console.log("-- --??.jsです-- --");
  try {
    await connectDB();
    console.log("-----------------------------success-----------");
    console.log(req);
    const singleItem = await ItemModel.findById(req.query.id);
    console.log("成功");
    return res.status(200).send({
      message: "アイテム読み取り成功(シングル画像ここ)",
      singleItem: singleItem,
    });
  } catch (err) {
    console.log("-- -- -- err -- -- --");
    console.log(err);
    return res.status(400).json({ message: "アイテム読み取り失敗(シングル)" });
  }
};

export default getSigleItem;
