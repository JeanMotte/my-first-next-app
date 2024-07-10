import React from 'react';
import RemoveBtn from './RemoveBtn';
import { FcEmptyTrash } from "react-icons/fc";
import { Link } from "@nextui-org/link";


function BookPreview() {
  return (
    <>
      <div>
        <div>
          <h3>Book Title</h3>
          <div>Author's name</div>
        </div>
        <div>
          <RemoveBtn />
          <Link href={'/editBook/123'}>
            <FcEmptyTrash size={24} />
          </Link>
        </div>
      </div>
    </>
  )
}

export default BookPreview
