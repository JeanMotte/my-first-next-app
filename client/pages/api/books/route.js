import connectMongoDB from "@/libs/mongodb";
import Book from "@/models/book";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { title, author } = await req.json();
  await connectMongoDB();
  await Book.create({title, author});
  return NextResponse.json({message: "Book created"}, {status: 201});
}
