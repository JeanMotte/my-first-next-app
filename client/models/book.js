import mongoose, { Mongoose, Schema } from "mongoose";

const bookSchema = new Schema(
  {
    title: String,
    author: String
  }, {
    timestamps: true
  }
);

const Book = mongoose.models.Book || mongoose.model("Book", bookSchema);

export default Book;