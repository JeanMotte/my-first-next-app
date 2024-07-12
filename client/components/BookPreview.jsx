import React from 'react';
import RemoveBtn from './RemoveBtn';
import EditBtn from './EditBtn';
import { Link } from "@nextui-org/link";

const getBooks = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/books', { cache: 'no-store' });
    if (!res.ok) {
      throw new Error('failed to fetch books');
    }
    return res.json();
  } catch (error) {
    console.log('error loading books', error);
  }
};

export default async function BookPreview() {
  const { books } = await getBooks();

  return (
    <BookList books={books} />
  );
}

const BookList = ({ books }) => (
  <>
    {books.map(book => (
      <div key={book._id} className="container mx-auto mt-4 p-4 border border-slate-400 rounded-md flex w-1/2">
        <div>
          <h3 className="font-bold text-xl">{book.title}</h3>
          <div>{book.author}</div>
        </div>
        <div className="ml-auto flex items-start">
          <Link href={`/removeBook/123`}>
            <RemoveBtn />
          </Link>
          <Link href={`/editBook/${book._id}`}>
            <EditBtn />
          </Link>
        </div>
      </div>
    ))}
  </>
);
