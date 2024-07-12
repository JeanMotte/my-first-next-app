import React from 'react'

function index() {
  return (
    <div className='container mx-auto w-1/2'>
      <form className='flex flex-col' action="">
        <input
          type="text"
          className=" p-2 border border-slate-200 rounded-md my-2"
          placeholder="Book Title"
        />
        <input
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
          <button className="px-8 py-2 mt-5 w-1/2 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default index
