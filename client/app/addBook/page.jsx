'use client';
import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

function AddBook() {

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const router =useRouter();

  const handleSubmit = async(e) => {
    e.preventDefault();
    if(!title || !author) {
    alert('elements missing')
    return
    }

    try {
      const res = await fetch('http://localhost:3000/api/books', {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({title, author})
      });
      if(res.ok) {
        router.push('/');
      } else {
        throw new Error("failed created book");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='container mx-auto w-1/2'>
      <form onSubmit={handleSubmit} className='flex flex-col' action="">
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type="text"
          className=" p-2 border border-slate-200 rounded-md my-2"
          placeholder="Book Title"
        />
        <input
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
          type="text"
          className=" p-2 border border-slate-200 rounded-md my-2"
          placeholder="Book author"
        />
        <input
          type="text"
          className=" p-2 border border-slate-200 rounded-md my-2"
          placeholder="Number of pages"
        />
        <div className='flex place-content-center'>
          <button type="submit" className="px-8 py-2 mt-5 w-1/2 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddBook
