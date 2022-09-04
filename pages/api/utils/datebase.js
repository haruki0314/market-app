//utils/database.js
import mongoose from "mongoose";

const connectDB = async () => {};
//追加

try {
  await mongoose.connect(
    "mongodb+srv://haruki:Haruki1472@cluster0.czjtsev.mongodb.net/?retryWrites=true&w=majority"
  );
  console.log("Success:Connected to MongoDB");
} catch (err) {
  console.log("Failure:Unconected to MongoD");
  throw new Error();
}
export default connectDB;
