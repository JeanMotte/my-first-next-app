import mongoose from "mongoose";

function connectMongoDB() {
  try {
    mongoose.connect(process.env.MONGODB_URI);
    console.log("connected to mongodb");
  } catch (error) {
    console.log("error");
  }
};

export default connectMongoDB;
