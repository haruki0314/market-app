import mongoose from "mongoose";
import connectDB from "../../../utils/datebase";
import { ItemModel } from "../../../utils/schemeModels";
import auth from "../user/auth";

const getSigleItem = async (req, res) => {
  console.log("-- --??.jsです-- --");
  try {
    await connectDB();
    console.log("-----------------------------success-----------");
    console.log(req.query.id);

    if (req.query.id.match(/^[0-9a-fA-F]{24}$/)) {
      console.log("成功");
      const singleItem = await ItemModel.findById(req.query.id);
      console.log(singleItem);
      return res.status(200).json({
        message: "アイテム読み取り成功(シングル画像ここ)",
        singleItem: singleItem,
      });
    }
    console.log("不適切");
    return res.status(400).send({
      message: "アイテム読み取りIDが不適切",
    });
    console.log("成功");
  } catch (err) {
    console.log("-- -- -- err -- -- --");
    console.log(err);
    return res.status(400).json({ message: "アイテム読み取り失敗(シングル)" });
  }
};

export default auth(getSigleItem);
