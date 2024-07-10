import React from 'react';
import RemoveBtn from './RemoveBtn';
// import { FcEmptyTrash } from "react-icons/fc";
import { Link } from "@nextui-org/link";
import EditBtn from './EditBtn';


function BookPreview() {
  return (
    <>
      <div className="container mx-auto mt-4 p-4 border border-slate-400 rounded-md flex items-center w-1/2">
        <div>
          <h3>Book Title</h3>
          <div>Author's name</div>
        </div>
        <div className="ml-auto flex space-x-2">
          <Link href={'/removeBook/123'}>
            <RemoveBtn />
          </Link>
          <Link href={'/editBook/123'}>
            <EditBtn />
          </Link>
        </div>
      </div>
    </>
  )
}

export default BookPreview
