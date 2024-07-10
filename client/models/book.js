import mongoose, { Mongoose, Schema } from "mongoose";

const bookSchema = new Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true }
  }, {
    timestamps: true
  }
);

const Book = mongoose.models.Book || mongoose.model("Book", bookSchema);

export default Book;
