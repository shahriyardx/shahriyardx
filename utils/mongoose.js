import mongoose from "mongoose";

if (mongoose.connection?.readyState == 0) {
  mongoose.connect(process.env.MONGO_URL)
}