//utils/database.js
import mongoose from "mongoose";

const connectDB = async () => {
  console.log("--database--");
  try {
    await mongoose.connect(
      "mongodb+srv://haru:Ha12ru34@cluster0.pzm924t.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Success:Connected to MongoDB");
  } catch (err) {
    console.log(err);
    console.log("Failure:Unconected to MongoD");
    throw new Error();
  }
};
export default connectDB;