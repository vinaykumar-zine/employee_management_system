import React from 'react'

const CreateTask = () => {
  return (
    <div className='pt-10'>
    <form className='flex flex-wrap p-10 w-full bg-[#1c1c1c] shadow-lg rounded-2xl items-start justify-between'>
      {/* Left Side */}
      <div className='w-full md:w-1/2 pr-5'>
        <div className='mb-5'>
          <h3 className='text-lg font-semibold text-gray-400 mb-2'>Task Title</h3>
          <input 
            className='border bg-transparent rounded-lg border-gray-300 py-2 px-4 w-full focus:outline-none focus:ring-2 ' 
            type='text' 
            placeholder='Make a UI design' 
          />
        </div>

        <div className='mb-5'>
          <h3 className='text-lg font-semibold text-gray-400 mb-2'>Date</h3>
          <input 
            className='border bg-transparent rounded-lg border-gray-300 py-2 px-4 w-full focus:outline-none focus:ring-2 ' 
            type='date' 
          />
        </div>

        <div className='mb-5'>
          <h3 className='text-lg font-semibold text-gray-400 mb-2'>Assign To</h3>
          <input 
            className='border bg-transparent rounded-lg border-gray-300 py-2 px-4 w-full focus:outline-none focus:ring-2 ' 
            type='text' 
            placeholder='Employee name' 
          />
        </div>

        <div className='mb-5'>
          <h3 className='text-lg font-semibold text-gray-400 mb-2'>Category</h3>
          <input 
            className='border bg-transparent rounded-lg border-gray-300 py-2 px-4 w-full focus:outline-none focus:ring-2 ' 
            type='text' 
            placeholder='Design, Development, etc.' 
          />
        </div>
      </div>

      {/* Right Side */}
      <div className='w-full md:w-1/2 flex flex-col'>
        <h3 className='text-lg font-semibold text-gray-400 mb-2'>Description</h3>
        <textarea 
          className='border bg-transparent rounded-lg border-gray-300 py-2 px-4 w-full h-40 resize-none focus:outline-none focus:ring-2 ' 
          placeholder='Add a detailed description...' 
        ></textarea>

        <button 
          className='text-white border-none mt-8 w-full py-3 text-lg bg-emerald-600 transition-all rounded-lg shadow-lg focus:ring-2 '
        >
          Create Task
        </button>
      </div>
    </form>
  </div>
  )
}

export default CreateTask