import connectMongoDB from "@/libs/mongodb";
import Book from "@/models/book";
import { NextResponse } from "next/server";

export async function POST(req) {
  console.log('POST request received');
  try {
    const { title, author } = await req.json();
    await connectMongoDB();
    await Book.create({ title, author });
    console.log('Book created successfully');
    return NextResponse.json({ message: "Book created" }, { status: 201 });
  } catch (error) {
    console.error('Error creating book:', error);
    return NextResponse.json({ message: "Error creating book" }, { status: 500 });
  }
}

export async function GET() {
  await connectMongoDB();
  const books = await Book.find();
  return NextResponse.json({ books })
}

export async function DELETE(req) {
  const id = req.nextUrl.searchParams.get('id');
  await connectMongoDB();
  await Book.findByIdAndDelete(id);
  return NextResponse.json({message: `Book ${id} deleted`}, {status: 200})
  }
