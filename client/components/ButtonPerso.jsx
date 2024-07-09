import React from 'react';

function ButtonPerso() {
  return (
    <a href={'/addBook'}
      className="px-8 py-0.5 border-2 border-black dark:border-white uppercase bg-white text-black transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0,1),2px_2px_rgba(0,0,0,1),3px_3px_rgba(0,0,0,1),4px_4px_rgba(0,0,0,1),5px_5px_rgba(0,0,0,1)] dark:shadow-[1px_1px_rgba(255,255,255,1),2px_2px_rgba(255,255,255,1),3px_3px_rgba(255,255,255,1),4px_4px_rgba(255,255,255,1),5px_5px_rgba(255,255,255,1)]">
      Add a book!
    </a>
  );
}

export default ButtonPerso;
