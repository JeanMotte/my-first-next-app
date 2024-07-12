'use client';
import React from 'react';
import { FcEmptyTrash } from "react-icons/fc";
import { useRouter } from "next/navigation";

function RemoveBtn({ id }) {
  const router = useRouter();

  const removeBook = async () => {
    const confirmed = confirm("Are you sure?");
    console.log('Confirmation:', confirmed);

    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/books?id=${id}`, {
        method: 'DELETE',
      });
      console.log('Response:', res);

      if (res.ok) {
        console.log('Book removed, refreshing...');
        router.push('/')
      } else {
        alert("Failed to remove book");
      }
    }
  };

  return (
    <button onClick={removeBook}>
      <FcEmptyTrash size={24} />
    </button>
  );
}

export default RemoveBtn;
