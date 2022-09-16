//書き込みを行うコード
import connectDB from "../utils/datebase";

const createItem = (req, res) => {
  // try {
  //   await connectDB();
  //   //DB書き込みを行うコード
  // await ItemModel.create(req.body);
  console.log("--create.js--");
  console.log(req.body.title);
  return res.status(200).json({ message: "アイテム作成成功" });
  // } catch (err) {
  //   return res.status(400).json({ message: "アイテム作成失敗" });
  // }
  // return 0;
};
export default createItem;

// Ha12ru34;
// user:haruki
// Ha12ru34
// mongodb+srv://haruki:<password>@cluster0.vsavogn.mongodb.net/?retryWrites=true&w=majority
