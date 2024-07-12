import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";
import Book from "@/models/book";

export async function PUT(req, {params}) {
  const {id} = params;
  const {newTitle: title, newAuthor: author} = await req.json();
  await connectMongoDB();
  await Book.findByIdAndUpdate(id, {title, author});
  return NextResponse.json({message: "Book updated"}, {status: 200 });
}

export async function GET(req, {params}) {
  const {id} = params;
  await connectMongoDB();
  // in mongodb, the id is stored in _id. We want to match this one to the params one
  const book = await Book.findOne({_id: id});
  return NextResponse.json({book}, {status:200});
}
