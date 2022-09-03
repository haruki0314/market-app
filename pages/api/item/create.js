import connectDB from "../utils/datebase";

const createItem = (req, res) => {
  connectDB();
  console.log(req.body.title);
  return res.status(200).json({ message: "アイテム作成" });
};
export default createItem;
