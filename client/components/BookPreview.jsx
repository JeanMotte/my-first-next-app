import React, { useState, useEffect } from 'react';
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

export default function BookPreview() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const data = await getBooks();
      setBooks(data.books);
    };
    fetchBooks();
  }, []);

  const handleRemove = (id) => {
    setBooks(books.filter(book => book._id !== id));
  };

  return (
    <BookList books={books} />
  );
}

const BookList = ({ books }) => (
  <>
    {books.reverse().map(book => (
      <div key={book._id} className="container mx-auto mt-4 p-4 border border-slate-400 rounded-md flex w-1/2">
        <div>
          <h3 className="font-bold text-xl">{book.title.charAt(0).toUpperCase() + book.title.slice(1)}</h3>
          <div>{book.author.charAt(0).toUpperCase() + book.author.slice(1)}</div>
        </div>
        <div className="ml-auto flex items-start">
          <RemoveBtn id={book._id} />
          <Link href={`/editBook/${book._id}`}>
            <EditBtn />
          </Link>
        </div>
      </div>
    ))}
  </>
);
