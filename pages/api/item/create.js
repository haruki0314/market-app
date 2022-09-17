//書き込みを行うコード
import connectDB from "../utils/datebase";
import { ItemModel } from "../utils/schemeModels";

const createItem = async (req, res) => {
  try {
    console.log("--create.js--");
    //DB接続
    await connectDB();
    console.log(req.body.title);
    await ItemModel.create(req.body);
    return res.status(200).json({ message: "アイテム作成成功" });
  } catch (err) {
    return res.status(400).json({ message: "アイテム作成失敗" });
  }
  // return 0;
};
export default createItem;

// Ha12ru34;
// user:haruki
// Ha12ru34
// mongodb+srv://haruki:<password>@cluster0.vsavogn.mongodb.net/?retryWrites=true&w=majority
// mongodb+srv://haruki:Ha12ru34@cluster0.vsavogn.mongodb.net/?retryWrites=true&w=majority
